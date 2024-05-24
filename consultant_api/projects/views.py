from django.http import JsonResponse
from .models import Projects
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def project_list(request):
    """
    project_list: create/list all projects
    methods:
        GET: list all projects
        POST: create a new project
    return: json response
    """
    if request.method == "GET":
        projects = Projects.objects.all()
        project_data = [{"title": project.title,
                         "id": project.id, 
                         "category": project.category,
                         "image_url": project.image_url, 
                         "content": project.content, 
                         "challenge": project.challenge, 
                         "client": project.client, 
                         "address": project.address,
                         "year": project.year, 
                         "date_created": project.date_created} for project in projects]
        
        return JsonResponse(project_data, safe=False)
    
    if request.method == "POST":
        data = json.loads(request.body)
        new_project = Projects.objects.create(
            title=data['title'],
            category=data['category'],
            content=data['content'],
            challenge=data['challenge'],
            client=data['client'],
            address=data['address'],
            year=data['year'],
            image_url=data['image_url']
        )

        return JsonResponse({'id': new_project.id, 
                             'title': new_project.title, 
                             'category': new_project.category, 
                             'client': new_project.client, 
                             'date_created': new_project.date_created}, status=201)
    


    
def project_detail(request, pk):
    """
    project_detail: retrieve project by primary key (ID)
    args:
        pk: primary key of project to retrieve
    return: json data
    """
    try:
        project = Projects.objects.get(pk=pk)
        project_data = {"title": project.title, 
                        "category": project.category, 
                        "content": project.content, 
                        "challenge": project.challenge, 
                        "client": project.client, 
                        "address": project.address,
                        "year": project.year,
                        "image_url": project.image_url, 
                        "date_created": project.date_created} 
        return JsonResponse(project_data)
    except Projects.DoesNotExist:
        return JsonResponse({"error": "project not found"}, status=404)
