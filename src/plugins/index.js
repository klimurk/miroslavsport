/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '@/stores'
import router from '@/router'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'cz',
  fallbackLocale : 'cz',
  messages:{
    cz:{
      block1:{
        title: "Online trenér, který vám změní život!",
        features: "Online Coach - Osobní tréninky - Tréninkový Plány - Jídelničky"
      },
      block2:{
        title: "Proč já?",
        photo1:{
          text1:"107 kilo",
          text2:"slabosti",
        },
        photo2:{
          text1:"72 kilo",
          text2:"disciplíny",
        },
        description:{
          title1: "Není to genetika.",
          title2: "Není to štěstí.",
          title3: "Je to práce",
          text1: "Ještě před pár lety jsem stál přesně tam, kde možná právě teď stojíš ty.",
          text2:"Bez formy. Bez směru. Bez sebevědomí.",
          text3:"Změna začala rozhodnutím. A odhodláním jít dál i ve dnech, kdy se ti nechce vůbec nic.",
          text4:"Sám jsem si tím prošel, vím jak těžký to je – nejen fyzicky, ale i psychicky.",
          text5:"Moje filozofie je ",
          text6:"balance",
          text7:" – žádný extrémní zákazy, protože ty stejně nikdy dlouhodobě nefungují. Naučím tě, jak si změnit život bez toho, abys ztratil hlavu nebo radost ze života.",
          text8:"Tuhle cestu jsem už jednou prošel. A víš co? ",
          text9:"Klidně ji projdu znovu – s tebou.",
          text10:"Neprodávám motivaci. Prodávám výsledky.",
          text11:"Pokud chceš makat, jsi tu správně.",
          text12:"Pokud hledáš výmluvy – internet je plný jiných trenérů.",
        }
      },
      block3:{
        title:"Služby",
        currency:"Kč",
        buttonText:"chci záčít",
        item1:{
          title: "Základ",
          price:"2490",
          period:"měsíčné",
          description:{
            item1:"Úvodní konzultace 30 min",
            item2:"Individuální tréninkový plán",
            item3:"Jídelníček",
            item4:"Video vysvětlivky cviku",
            item5:"Kontrola 1x Týdně",
            item6:"WhatsApp Chat",
          }
        },
        item2:{
          title: "Výsledky",
          subtitle: "Nejpopulárnější",
          price:"4900",
          period:"měsíčné",
          description:{
            item1:"1x Osobní Trénink 90min + Inbody ",
            item2:"Individuální tréninkový plán",
            item3:"Jídelníček ",
            item4:"Video vysvětlivky cviku",
            item5:"Kontrola 2x Týdně",
            item6:"WhatsApp Chat",
            item7:"Suplementace",
            item8:"Video návody k Jídelníčku"
          }
        },
        item3:{
          title: "VIP",
          title2: "TRANSFORMACE",
          price:"9900",
          period:"měsíčné",
          description:{
            item1:"Vše z balíčku VÝSLEDKY",
            item2:"Osobní Trénink nebo Konzultace 4x",
            item3:"WhatsApp podpora 5 dní v týdnu",
            item4:"Hlasovky, videa, motivace, podpora při krizích ",
            item5:"Life Couching - nastavení návyku, režimu",
            item6:"Probírání závislosti, přejídání ",
            item7:"Pomoc s mindsetem, work-life balance"
          }
        }
      },
      block4:{
        title: "Recenze",
        comment1:{
          text:"Cvičila jsem dlouho a vyměnila jsem spoustu trenérů, ale výsledky v podstatě nikde...  Po zahájení spolupráce s Mirkem jsem začala vidět změny už po několika měsicích – nabírala jsem svalovou hmotu a zároveň hubla. Věnoval se mi individuálně, motivoval mě a plánoval tréninky tak, že mě to konečně začalo bavit. Ikdyz tréninky jsou tvrdší, jsou opravdu efektivní. Super člověk, který ví, co dělá. Už si svůj život bez něj neumím představit.",
          author: "Arina"
        },
        comment2:{
          text:`Čauky, chtěla jsem ti jen napsat pár slov a poděkovat za super tréninky. To bych takhle sama za tuto dobu nedokázala👌 Fakt si vážím podpory nejen během tréninku, ale i mimo něj, hodně mi pomohly rady ohledně jídla a doplňků😁 Je vidět že do toho dáváš maximum a že ti jde o výsledek. Taky moc cením vždy přátelský a vstřícný přístup
          
            S výsledky jsem velmi spokojená, to jsem ani nevěřila, že se tak rychle přiblížím postavě, kterou jsem si přála
            Stopro budu doporučovat!! Díkyyy💫`,
          author: "Daria"
        },
        comment3:{
          text:"Cvičila jsem dlouho a vyměnila jsem spoustu trenérů, ale výsledky v podstatě nikde...  Po zahájení spolupráce s Mirkem jsem začala vidět změny už po několika měsicích – nabírala jsem svalovou hmotu a zároveň hubla. Věnoval se mi individuálně, motivoval mě a plánoval tréninky tak, že mě to konečně začalo bavit. Ikdyz tréninky jsou tvrdší, jsou opravdu efektivní. Super člověk, který ví, co dělá. Už si svůj život bez něj neumím představit.",
          author: "Name1"
        },
        comment4:{
          text:"Cvičila jsem dlouho a vyměnila jsem spoustu trenérů, ale výsledky v podstatě nikde...  Po zahájení spolupráce s Mirkem jsem začala vidět změny už po několika měsicích – nabírala jsem svalovou hmotu a zároveň hubla. Věnoval se mi individuálně, motivoval mě a plánoval tréninky tak, že mě to konečně začalo bavit. Ikdyz tréninky jsou tvrdší, jsou opravdu efektivní. Super člověk, který ví, co dělá. Už si svůj život bez něj neumím představit.",
          author: "Name1"
        }
      },
      block5:{
        title: "Rezervace",
        service:"Služba",
        name:"Jmeno",
        phoneNumber:"Telefonní číslo",
        email:"Email",
        addInfo: "Další informace",
        confirm: "Potvrdit",
        successResponse:{
          title: "Formulář byl odeslán",
          text:"Děkuji. Určitě se vám brzy ozvu"
        },
        failedResponse:{
          title: "Formulář nebyl odeslán",
          text:"Bohužel se něco pokazilo. Zkuste to znovu nebo mě kontaktujte přes Instagram."
        }
      }
    },
    ru:{
      block1:{
        title: "Онлайн тренер, который изменит вашу жизнь!",
        features: "Онлайн тренер - Персональные тренировки - Планы тренировок - Меню"
      },
      block2:{
        title: "Почему я?",
        photo1:{
          text1:"107 кг",
          text2:"слабости",
        },
        photo2:{
          text1:"72 кг",
          text2:"дисциплины",
        },
        description:{
          title1: "Это не генетика.",
          title2: "Это не везение.",
          title3: "Это работа",
          text1: "Несколько лет назад я стоял именно там, где сейчас, возможно, стоите вы.",
          text2:"Без формы. Без направления. Без уверенности в себе.",
          text3:"Перемены начались с решения. И решимости продолжать идти вперед даже в те дни, когда вам ничего не хочется делать.",
          text4:"Я сам прошел через это, я знаю, как это тяжело - не только физически, но и психологически.",
          text5:"Моя философия ",
          text6:"баланс",
          text7:" - никаких экстремальных запретов, потому что они все равно никогда не работают в долгосрочной перспективе. Я научу вас, как изменить свою жизнь, не теряя головы и не теряя жизненной энергии.",
          text8:"Я уже проходил этот путь. И знаете что?",
          text9:"Я пройдусь по нему еще раз - вместе с вами.",
          text10:"Я не продаю мотивацию. Я продаю результаты.",
          text11:"Если вы хотите работать, вы находитесь в правильном месте.",
          text12:"Если вы ищете оправдания - в интернете полно других тренеров.",
        }
      },
      block3:{
        title:"Услуги",
        currency:"Kč",
        buttonText:"хочу начать",
        item1:{
          title: "Основа",
          price:"2490",
          period:"в месяц",
          description:{
            item1:"Первичная консультация 30 мин",
            item2:"Индивидуальный план тренировок",
            item3:"Меню",
            item4:"Видеообъяснение упражнения",
            item5:"Проверка 1 раз в неделю",
            item6:"Чат WhatsApp",
          }
        },
        item2:{
          title: "Результат",
          subtitle: "Самое популярное",
          price:"4900",
          period:"в месяц",
          description:{
            item1:"1x Персональная тренировка 90 минут + Inbody",
            item2:"Индивидуальный план тренировок",
            item3:"Меню ",
            item4:"Видеообъяснение упражнения",
            item5:"Проверка 2 раза в неделю",
            item6:"Чат WhatsApp",
            item7:"Suplementace",
            item8:"Видеоинструкции для меню"
          }
        },
        item3:{
          title: "VIP",
          title2: "трансформация",
          price:"9900",
          period:"в месяц",
          description:{
            item1:"Все из пакета Результат",
            item2:"Персональная тренировка или консультация 4x",
            item3:"Поддержка по WhatsApp 5 дней в неделю",
            item4:"Голосовые сообщения, видео, мотивация, поддержка в кризисных ситуациях",
            item5:"Жизненный коучинг - формирование привычек, режим",
            item6:"Обсуждаем зависимость, переедание",
            item7:"Помощь в работе с мышлением, баланс между работой и личной жизнью"
          }
        }
      },
      block4:{
        title: "Отзывы",
        comment1:{
          text:"Я давно занимаюсь спортом и сменила много тренеров, но результатов, как правило, не было...  После того как я начала заниматься с Мирославом, я начала видеть изменения уже через несколько месяцев - я набирала мышечную массу и одновременно теряла вес. Он уделял мне индивидуальное внимание, мотивировал меня и планировал мои тренировки таким образом, что я наконец-то начала получать от них удовольствие. Несмотря на то, что тренировки сложнее, они действительно эффективны. Супер человек, который знает, что делает. Я уже не могу представить свою жизнь без него.",
          author: "Arina"
        },
        comment2:{
          text:`Привет, я просто хотела написать тебе несколько слов и поблагодарить за потрясающие тренировки. Я бы не смогла так заниматься самостоятельно за такое время👌 Я очень ценю поддержку не только во время тренировок, но и вне их, советы по питанию и добавкам мне очень помогли😁 Видно, что ты выкладываешься по полной и тебе не безразличен результат. Я также очень ценю всегда дружелюбное и доброжелательное отношение.
          
            Я очень довольна результатами, даже не верила, что смогу так быстро приблизиться к желаемой фигуре
            Буду рекомендовать 100%!!! Спасибки💫`,
          author: "Daria"
        },
        comment3:{
          text:"Cvičila jsem dlouho a vyměnila jsem spoustu trenérů, ale výsledky v podstatě nikde...  Po zahájení spolupráce s Mirkem jsem začala vidět změny už po několika měsicích – nabírala jsem svalovou hmotu a zároveň hubla. Věnoval se mi individuálně, motivoval mě a plánoval tréninky tak, že mě to konečně začalo bavit. Ikdyz tréninky jsou tvrdší, jsou opravdu efektivní. Super člověk, který ví, co dělá. Už si svůj život bez něj neumím představit.",
          author: "Name1"
        },
        comment4:{
          text:"Cvičila jsem dlouho a vyměnila jsem spoustu trenérů, ale výsledky v podstatě nikde...  Po zahájení spolupráce s Mirkem jsem začala vidět změny už po několika měsicích – nabírala jsem svalovou hmotu a zároveň hubla. Věnoval se mi individuálně, motivoval mě a plánoval tréninky tak, že mě to konečně začalo bavit. Ikdyz tréninky jsou tvrdší, jsou opravdu efektivní. Super člověk, který ví, co dělá. Už si svůj život bez něj neumím představit.",
          author: "Name1"
        }
      },
      block5:{
        title: "Резервация",
        service:"Услуга",
        name:"Имя",
        phoneNumber:"Номер телефона",
        email:"Email",
        addInfo: "Дополнительная информация",
        confirm: "Подтвердить",
        successResponse:{
          title: "Форма отправлена",
          text:"Спасибо. Я обязательно свяжусь с вами в ближайшее время"
        },
        failedResponse:{
          title: "Форма не отправлена",
          text: "К сожалению что то пошло не так. Попробуйте снова или свяжитесь со мной через Инстаграм."
        }
      }
    }
  }
  // something vue-i18n options here ...
})
import FlagIcon from 'vue-flag-icon'
// import { block } from 'vuetify/lib/util/anchor.mjs'
export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(i18n)
    .use(FlagIcon)
}
