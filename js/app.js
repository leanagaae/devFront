/* Dans le body tout les h1 sont en rouge et quand on les ruvoles ils sont en blue*/
body{
  h1{
    color: red;
    &:hover{
      color:blue;
    }
  }
}
