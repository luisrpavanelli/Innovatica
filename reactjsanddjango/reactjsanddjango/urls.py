from django.urls import path
from rest_framework.authtoken.views import ObtainAuthToken
from django.views.generic import RedirectView
from reactjsanddjangoapp.views import (
    UsuarioListCreateAPIView,
    UsuarioRetrieveUpdateDestroyAPIView,
    ProdutoListCreateAPIView,
    ProdutoRetrieveUpdateDestroyAPIView,
    UsuarioDetailAPIView,
    ProdutoDetailAPIView,
)

urlpatterns = [
    path('', RedirectView.as_view(url='usuarios/')),
    path('usuarios/', UsuarioListCreateAPIView.as_view(), name='usuario-list-create'),
    path('usuarios/<int:pk>/', UsuarioRetrieveUpdateDestroyAPIView.as_view(), name='usuario-retrieve-update-destroy'),
    path('produtos/', ProdutoListCreateAPIView.as_view(), name='produto-list-create'),
    path('produtos/<int:pk>/', ProdutoRetrieveUpdateDestroyAPIView.as_view(), name='produto-retrieve-update-destroy'),
    path('usuarios/detail/<int:pk>/', UsuarioDetailAPIView.as_view(), name='usuario-detail'),
    path('produtos/detail/<int:pk>/', ProdutoDetailAPIView.as_view(), name='produto-detail'),
    path('api/token/', ObtainAuthToken.as_view(), name='api-token'),
]
