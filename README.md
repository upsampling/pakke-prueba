# Prueba Técnica de Pakke
### Backend con dos endpoints, uno público y otro privado.

#### Privado --> /image/transform
Se tiene que ingresar con credenciales, y además enviarle un objeto con la propiedad "link", la cuál
debe de tener un link válido a una imagen. Si todo está bien, y la url de la imagen existe, se te
retornará un objeto con la imagen en base64.

#### Público --> /object/clean 
Es un servicio que no necesita credenciales pero sí hay que enviarle un objecto con ciertas propiedades, de lo contrario te de volverá errores controlados. Si el objeto está bien, la respuesta será el mismo objeto pero sin las propiedades que hayan sido null.

#### alive   --> /alive
Este endpoint sólo sirve para saber si el backend está en servicio.