import React from 'react'
import img from './../../assets/slide2.png'
import mochi from './../../assets/mochi.png'
import equite from './../../assets/equite.png'
import integralite from './../../assets/integralite.png'
import perseverence from './../../assets/perseverence.png'
import honetete from './../../assets/honetete.png'
import { Accordian } from './Accordian'


export const Apropos = () => {
 
  return (
    <div className='apropos'>
         <div className='container'>
          
          <div className='row' >
          
         <div className='col-sm-12 col-md-6'>
        
        <h1>Le mochi, qu’est-ce que c’est ?</h1>
        <h2>Alors, c’est quoi cette petite boule de douceur qui a depuis peu<br/> franchi les frontières du Japon et dont tout le monde parle ?</h2>
        <p>Déjà, ça s’écrit bien mochi mais ça se prononce moTchi.

        Importé de Chine, il y a 2000 ans, le mochi est devenu une pâtisserie emblématique du Japon. Dégustée lors de la cérémonie du thé, cette délicieuse pâtisserie est désormais l’incontournable dessert du nouvel an japonais.
        </p>
        </div>
        <div className='col-sm-12 col-md-6'>
        
        <img src={img}  style={{width:"80%",marginLeft:"15%",marginTop:"60px"}}/>

          </div>
        
        </div>   
        </div>
        <article className='container' >
         
          <div className='row'>
          <div className='col-md-6'>
          <img src={mochi}  style={{width:"80%"}}/>
          </div>
          <div className='col-md-6 ' style={{marginTop:"10%"}}>
         
          <p>Le Mochi est à base de riz gluant qui se décline sous de nombreuses formes, salées comme sucrées et qui accompagne la plupart des fêtes et célébrations nippones.
        Cette pâtisserie traditionnelle se compose d’une enveloppe moelleuse de riz cuit à la vapeur, avec un cœur fourré d’une délicate pâte de haricots rouges (anko) ou blancs (shiroan) qu’on a lentement fait confire.</p>
          </div>
           </div>

          
      
        </article>
        <section className='mochipatisserie'>
          <div className='container'>
          <h1>QUI SOMMES-NOUS ?</h1>
          <p>Mochi pâtisserie est une pâtisserie récemment implanté à Tunis,
           cité ennasr 2. 
Chez nous, tout est fait maison, chaque produit que nous réalisons est conçu avec passionce: à découvrir sur notre site et à déguster chez nous !</p>
<h3>Nos patisserie mochi :</h3><p>Nous possédons une large gamme de pâtisserie « Mochi » qui change au fil des saisons.
Toutes nos créations sont fabriquées dans notre atelier
 de façon artisanale au plus proche de la tradition japonaise avec des ingrédients bio dans leur grande majorité. Ils ne contiennent aucun produit d’origine animale sont garantis 100% sans gluten.
</p>
</div>
  <div className='mochitaste'>
     <h1>Mochi Patisserie</h1>
  </div>
        </section>
        <section className='container'>
            <article>
              <div className='row'>
              <div className='col-md-6' >
                <h3 style={{margin:"20px 0",fontSize:"32px"}}>Garniture</h3>
              <p>Côté garniture, vous pouvez opter pour les goûts plus originaux : mangue, fraise, coco, caramel, framboise… Ou même tester la pistache, ou la cacahuète. Et bien sûr, pensez au classique chocolat. Travaillez le mochi à votre façon avec vos ingrédients fétiches !</p>
              <h3 style={{margin:"20px 0",fontSize:"32px"}}>Nos valeurs</h3>
              <p>Nous agissons et nous prenons nos décisions en suivant ces quatre priorités, dans cet ordre :</p>
              </div>
              <div className='col-md-6'>
                 <Accordian/>
                </div>
              </div>
              </article>
                        
        </section>
        <section className='container'>
         <div className='row' >
         <div className='col-sm-3 col-md-6 col-lg-12'>
         <article className='mochiAction'>
                     <div>
                     <img src={integralite} alt='action'/>
                     <h3>Mettre le client au centre</h3>
                     </div>
                     <div>
                     <img src={honetete} alt='action'/>
                     <h3>Assurer la confiance</h3>
                     </div>
                     <div>
                     <img src={equite} alt='action'/>
                     <h3>Renforcer notre réputation</h3>
                     </div>
                     <div>
                     <img src={perseverence} alt='action'/>
                     <h3>Développer nos activités</h3>
                     </div>
                     </article>
                    </div>
                    </div>
                   
      
              
                   
        </section>    
                
      
        
      

    </div>
  )
}
