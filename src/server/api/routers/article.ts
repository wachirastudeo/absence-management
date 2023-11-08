import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";


//fontend => api.article.[list,byId,update,delete,add]

//backend

interface Article{
  id:number;
  title:string;
  excerpt:string;
  content:string;
}

const articles:Article[] =[
  {id:1,title:'Title#1',excerpt:'Excerpt#1',content:'Content#1'},
  {id:2,title:'Title#2',excerpt:'Excerpt#2',content:'Content#2'},
  {id:3,title:'Title#3',excerpt:'Excerpt#3',content:'Content#3'},
  {id:4,title:'Title#4',excerpt:'Excerpt#4',content:'Content#4'},
  {id:5,title:'Title#5',excerpt:'Excerpt#5',content:'Content#5'},


]


export const articleRouter = createTRPCRouter({
 list: publicProcedure.query(()=>{
  return articles;

 })
});
