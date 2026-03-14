from django.http import JsonResponse

# Create your views here.
def home(request):
    data = {
        'message':'Welcome bro'
    }
    return JsonResponse(data)