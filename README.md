import json
import boto3
def lambda_handler(event, context):

# Get the username and password from the event payload
    Username = event['Username']

    Password = event['Password']


    # Connect to DynamoDB

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('users')


    try:

    # Query DynamoDB for the given username

        response = table.get_item(Key={'Username': Username})


    # Check if the item exists and the password matches

        if 'Item' in response and response['Item']['Password'] == Password:
            {
            return  json.dumps(True)
            }

        else:
            {
            return json.dumps(False)
            }

    except Exception as e:

        return {

            'statusCode': 500,

            'body': str(e)

        }
# travel-react-app
