from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Service
import json

# Create your views here.

@csrf_exempt
def service_list(request):
    """
    service_list: create/list all services
    methods:
        GET: list all services
        POST: create new services
    return: json data
    """
    if request.method == 'GET':
        services = Service.objects.all()

        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)

        paginator = Paginator(services, per_page)

        try:
            services_page = paginator.page(page)
        except PageNotAnInteger:
            services_page = paginator.page(1)
        except EmptyPage:
            services_page = paginator.page(paginator.num_pages)

        

        service_data = [{"title": s.title,
                         "id": s.id, 
                         "description_1": s.description_1, 
                         "description_2": s.description_2, 
                         "description_3": s.description_3,
                         "image_url": s.image_url, 
                         "challenge": s.challenge} for s in services_page]
        response = {
            "total": paginator.count,
            "num_pages": paginator.num_pages,
            "current_page": services_page.number,
            "data": service_data
        }
       

        return JsonResponse(response, safe=False)
    
    if request.method == 'POST':
        data = json.loads(request.body)
        new_service = Service.objects.create(
            title=data['title'],
            description_1=data['description_1'],
            description_2=data['description_2'],
            description_3=data['description_3'],
            challenge=data['challenge'],
            image_url=data['image_url']
        )

        return JsonResponse({"id": new_service.id, "title": new_service.title}, status=201)
    


def service_detail(request, pk):
    """
    service: retrieve service records by id
    args:
        pk: primary key to retrieve record
    return: json data
    """
    try:
        s = Service.objects.get(pk=pk)
        s_data = {
            "title": s.title,
            "description_1": s.description_1,
            "description_2": s.description_2,
            "description_3": s.description_3,
            "challenge": s.challenge,
            "image_url": s.image_url,
        }

        return JsonResponse(s_data)
    except Service.DoesNotExist:
        return JsonResponse({"error": "service not found"}, status=404)
