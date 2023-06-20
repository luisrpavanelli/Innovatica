from django.db import models

class Usuario(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=100)
    aprovado = models.BooleanField(default=False)

    def __str__(self):
        return self.nome

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    categorias = models.ManyToManyField('Categoria')
    imagens = models.ManyToManyField('Imagem')

    def __str__(self):
        return self.nome

class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome

class Imagem(models.Model):
    imagem = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.imagem.name
