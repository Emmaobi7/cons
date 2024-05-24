from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Team
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
import json

# Create your views here.

@csrf_exempt
def team_list(request):
    """
    team_list: list all team members
    methods:
        GET: list all team members
        POST: add a team member
    return: json data
    """

    if request.method == 'GET':
        team = Team.objects.all()

        page = request.GET.get('page', 1)
        per_page = request.GET.get('per_page', 10)

        paginator = Paginator(team, per_page)

        try:
            services_page = paginator.page(page)
        except PageNotAnInteger:
            services_page = paginator.page(1)
        except EmptyPage:
            services_page = paginator.page(paginator.num_pages)


        team_data = [{"name": t.name,
                      "id": t.id, 
                      "role": t.role, 
                      "description": t.description, 
                      "gender": t.gender, 
                      "qualification": t.qualification, 
                      "email": t.email, 
                      "nationality": t.nationality,
                      "image_url": t.image_url, 
                      "job_exp": t.job_exp, 
                      "educational_exp": t.educational_exp, 
                      "first_skill": t.first_skill, 
                      "second_skill": t.second_skill, 
                      "third_skill": t.third_skill, 
                      "date_joined": t.date_joined} for t in services_page]
        
        response = {
            "total": paginator.count,
            "num_pages": paginator.num_pages,
            "current_page": services_page.number,
            "data": team_data
        }
       

        return JsonResponse(response, safe=False)
    
    if request.method == 'POST':
        data = json.loads(request.body)
        new_member = Team.objects.create(
            name=data['name'],
            role=data['role'],
            description=data['description'],
            gender=data['gender'],
            qualification=data['qualification'],
            email=data['email'],
            nationality=data['nationality'],
            job_exp=data['job_exp'],
            educational_exp=data['educational_exp'],
            first_skill=data['first_skill'],
            second_skill=data['second_skill'],
            third_skill=data['third_skill'],
            image_url=data['image_url'],
        )

        return JsonResponse({"id": new_member.id, 
                             "name": new_member.name, 
                             "role": new_member.role, 
                             "gender": new_member.gender, 
                             "date_joined": new_member.date_joined}, status=201)




def team_detail(request, pk):
    """
    team_detail: retrieve team member by ID
    args:
        pk: primary key to retrieve record
    return: json data
    """

    try:
        t = Team.objects.get(pk=pk)
        t_data = {  "name": t.name,
                    "id": t.id, 
                    "role": t.role, 
                    "description": t.description, 
                    "gender": t.gender, 
                    "qualification": t.qualification, 
                    "email": t.email, 
                    "nationality": t.nationality,
                    "image_url": t.image_url, 
                    "job_exp": t.job_exp, 
                    "educational_exp": t.educational_exp, 
                    "first_skill": t.first_skill, 
                    "second_skill": t.second_skill, 
                    "third_skill": t.third_skill, 
                    "date_joined": t.date_joined }
        
        return JsonResponse(t_data)
    except Team.DoesNotExist:
        return JsonResponse({"error": "member not found"}, status=404)