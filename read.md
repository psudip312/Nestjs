first of all first kam vaneko controller ho..
1step ma contoller ma data aaucha

@Post()
create(@Body() createTodoDto: CreateTodoDto) {
return this.todoService.servicecreate(createTodoDto);
}

eha mathi ko part ma data aayo ... kasari @Body ma data pathako cha postman ma..
ani tespachi tyo CreateTodoDto ma jancha jun chai k ho ta vanda aaune data haru ko structure ho data kasto type ko hunu parcha vanne ho..
then... tyo data haru servicecreate(createTodoDto) eha bhitra jancha ra.. tesle garnu parne stuff haru garcha like todo ko array bhitra kasari data halne stuff garcha.. then...
eti part le chai this.todoService. hamroo service bhitra chircha ra this.todoService.servicecreate(createTodoDto) eti le chai service bhitra ko servicecreate vanne function khojcha... then teslai return garcha..

docker.. docker file .. docker compose.. docker swamp...
