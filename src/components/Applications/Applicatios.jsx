
import './Applicatios.scss';

import Categories from './../Categories/Categories';
import Btn from './../Btn/Btn';

import hand from './../../assets/icons/features/hand.svg';
import chat from './../../assets/icons/features/chat.svg';
import mail from './../../assets/icons/features/mail.svg';

function Applicatios() {
  return (
    <section className="Applicatios" id="ApplicatiosId">
      <div className="container ">
        <div className="row">
        <div className="col-lg-6 ">
            <div className="Applicatios-data">
              <h3>كل ما تحتاجه لنمو متجرك ف مكان واحد</h3>
              <p>مميزات سوق تطبيقات زد تساعدك ف سهوله و سرعه الإستفادة من خدمات و حلول سوق التطبيقات لنمو متجرك و مضتعفه أرباحك</p>
              <ul>
                <li>
                  <figure>
                      <img src={mail} /> 
                  </figure>
                  
                 <p>سهوله واداره تفعيل تطبيقات من نفس لوحه متجرك</p></li>
                <li>
                  <figure>
                    <img src={chat} />
                  </figure>
                  <p>دعم فني وتقني متكامل متوفر عل مدار الساعه</p>
                  
                </li>

                <li>
                  <figure>
                  <img src={hand} /> اسعار تنافسيه مع تجربه مجانيه وباقات اشتراك متنوعة
                  </figure>
                  
                  </li>
              </ul>
              <Btn />
              </div>
        </div>
          <div className="col-lg-6 py-3">
       

   <section className="Categories" id="CategoriesId">
      <div className="container Categories-cot">
        <div class="Categories-imgConatiners">
        <img src="https://zid.sa/wp-content/themes/zid2020/images/animate-web.gif" class="desktop" alt="web screen"></img>
        </div>

      </div>
    </section>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Applicatios;
