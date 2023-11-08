import {api} from '~/utils/api'

const IndexPage=()=>{
 
 const {data:articles,isLoading} =api.article.list.useQuery();
  
 if(isLoading) return<div> loading... </div>
 if(!articles) return<div> no Content</div>

 return ( 
 <div>
    <ul> 
    {articles.map((article) => (
          <li key={article.id}>{article.content}</li>
        ))}
     
    </ul>

 </div>);
};
 export default IndexPage;