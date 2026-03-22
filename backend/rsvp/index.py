import json
import os
import psycopg2


def handler(event, context):
    """Сохранение и получение RSVP-ответов гостей свадьбы"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }

    method = event.get('httpMethod', 'GET')

    if method == 'POST':
        return save_rsvp(event, headers)
    elif method == 'GET':
        return get_responses(headers)

    return {
        'statusCode': 405,
        'headers': headers,
        'body': json.dumps({'error': 'Method not allowed'}),
    }


def save_rsvp(event, headers):
    body = json.loads(event.get('body', '{}'))

    full_name = body.get('fullName', '').strip()
    phone = body.get('phone', '').strip()
    persons = body.get('persons', 1)
    attendance = body.get('attendance', '').strip()
    wishes = body.get('wishes', '').strip()
    signature = body.get('signature', '').strip()

    if not full_name or not phone or not attendance or not signature:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Заполните все обязательные поля'}),
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO rsvp_responses (full_name, phone, persons, attendance, wishes, signature) "
        "VALUES (%s, %s, %s, %s, %s, %s) RETURNING id",
        (full_name, phone, int(persons), attendance, wishes, signature),
    )
    row_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True, 'id': row_id}),
    }


def get_responses(headers):
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute(
        "SELECT id, full_name, phone, persons, attendance, wishes, signature, created_at "
        "FROM rsvp_responses ORDER BY created_at DESC"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    responses = []
    for row in rows:
        responses.append({
            'id': row[0],
            'fullName': row[1],
            'phone': row[2],
            'persons': row[3],
            'attendance': row[4],
            'wishes': row[5],
            'signature': row[6],
            'createdAt': row[7].isoformat() if row[7] else None,
        })

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'responses': responses, 'total': len(responses)}),
    }
