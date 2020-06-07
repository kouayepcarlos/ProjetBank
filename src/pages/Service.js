import React,{Component} from 'react'
import Title from './Title'
export default class Service extends Component{

    state={
        services:[
        {
           title:"EXPERTISE COMPTABLE",
            info: " Comptabilté générale Comptabilité de gestion Fiscalité"
        },

        {
            title:"AUDIT",
             info: " Audit légal Audit contractuel Expertise judiciare ou amiabie"
         },


         {
            title:"CONSEIL",
             info: " Gestion de l'entreprise ,Gestion financière ,Gestion sociale"
         }
        //   ,
         
        //  {
        //     title:"FORMATION",
        //      info: "Sage , Comptabilité , Finance etc... "
        //  }
        ]
    }
    render(){
    return(
      
        <section className="services">

                <Title title="services"/>
               
             <div className='services-center'>
                
                       { this.state.services.map((item,index) =>{
                                    return (<article key={index} className="services">
                                        <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                    </article>
                                    );
                        })
                    }
                </div>
        </section>

             
          
               

    );
}
}