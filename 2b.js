<html>
    <head>
        <title>Class and Inheritance</title>
        <script>
            class Person{
                constructor(name,age){
                    this.name=name
                    this.age=age
                }
                det(){
                    return "name: "+this.name+"<br>"+" age: "+this.age
                }
            }
            class Emp extends Person{
                constructor(name,age,id){
                    super(name,age);
                    this.id=id;
                }
                getDet(){
                    return this.det()+"<br>"+"id: "+this.id
                }
            }
            function fun(){
                let v= new Emp("ravi",25,101)
                document.getElementById("id1").innerHTML=v.getDet();
            }
        </script>
    </head>
    <body bgcolor="cyan">
        <h3>Click here to view details</h3>
        <p id="id1"></p>
        <input type="button" value="view" onclick="fun()">
    </body>
</html>