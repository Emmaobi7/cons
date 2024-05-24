from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact, GetUpdates
import json
# Create your views here.

@csrf_exempt
def contact(request):
    """
    contact: handle contact us form
    methods:
        POST: receive data only
    return: json response
    """
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')


        try:
            Contact.objects.create(name=name, email=email, subject=subject, message=message)

            return JsonResponse({"success": "message sent successfully"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    else:
        return JsonResponse({"error": "Invalid request sent"}, status=405)



@csrf_exempt
def getUpdate(request):
    """
    getUpdate: handles our news letter subriction(will be migrated to mailchimp later)
    mehods:
        POST: create a new subscriber
        GET: list all emails
    """

    if request.method == 'GET':
        emails = GetUpdates.objects.all()
        email_data = [{"id": email.id, "email": email.email} for email in emails]
        return JsonResponse(email_data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        email = data.get('email')
        print(email)

        new_sub = GetUpdates.objects.create(email=email)

        return JsonResponse({"id": new_sub.id, "email": new_sub.email})
