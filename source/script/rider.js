const bookContentElement = document.getElementById('book-content');
const bookText = `
	<p>— Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j'y crois) — je ne vous connais plus, vous n'êtes plus mon ami, vous n'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.
	Так говорила в июле 1805 года известная Анна Павловна Шерер, фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия, первого приехавшего на ее вечер. Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила (грипп был тогда новое слово, употреблявшееся только редкими). В записочках, разосланных утром с красным лакеем, было написано без различия во всех:
	«Si vous n'avez rien de mieux à faire, Monsieur le comte (или mon prince), et si la perspective de passer la soirée chez une pauvre malade ne vous effraye pas trop, je serai charmée de vous voir chez moi entre 7 et 10 heures. Annette Scherer» 3.
	— Dieu, quelle virulente sortie! 4 — отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, башмаках и звездах, с светлым выражением плоского лица.
	Он говорил на том изысканном французском языке, на котором не только говорили, но и думали наши деды, и с теми, тихими, покровительственными интонациями, которые свойственны состаревшемуся в свете и при дворе значительному человеку. Он подошел к Анне Павловне, поцеловал ее руку, подставив ей свою надушенную и сияющую лысину, и покойно уселся на диване.
	— Avant tout dites-moi, comment vous allez, chère amie? 5 Успокойте меня, — сказал он, не изменяя голоса и тоном, в котором из-за приличия и участия просвечивало равнодушие и даже насмешка.
	— Как можно быть здоровой... когда нравственно страдаешь? Разве можно, имея чувство, оставаться спокойною в наше время? — сказала Анна Павловна. — Вы весь вечер у меня, надеюсь?
	— А праздник английского посланника? Нынче середа. Мне надо показаться там, — сказал князь. — Дочь заедет за мной и повезет меня.
	— Я думала, что нынешний праздник отменен, Je vous avoue que toutes ces fêtes et tous ces feux d'artifice commencent à devenir insipides 6.
	— Ежели бы знали, что вы этого хотите, праздник бы отменили, — сказал князь по привычке, как заведенные часы, говоря вещи, которым он и не хотел, чтобы верили.
	— Ne me tourmentez pas. Eh bien, qu'a-t-on décidé par rapport à la dépêche de Novosilzoff? Vous savez tout 7.
	— Как вам сказать? — сказал князь холодным, скучающим тоном. — Qu'a-t-on décidé? On a décidé que Buonaparte a brûlé ses vaisseaux, et je crois que nous sommes en train de brûler les nôtres 8.
	Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов.
	Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться.
	В середине разговора про политические действия Анна Павловна разгорячилась.</p>
	<p>— Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j'y crois) — je ne vous connais plus, vous n'êtes plus mon ami, vous n'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.
	Так говорила в июле 1805 года известная Анна Павловна Шерер, фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия, первого приехавшего на ее вечер. Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила (грипп был тогда новое слово, употреблявшееся только редкими). В записочках, разосланных утром с красным лакеем, было написано без различия во всех:
	«Si vous n'avez rien de mieux à faire, Monsieur le comte (или mon prince), et si la perspective de passer la soirée chez une pauvre malade ne vous effraye pas trop, je serai charmée de vous voir chez moi entre 7 et 10 heures. Annette Scherer» 3.
	— Dieu, quelle virulente sortie! 4 — отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, башмаках и звездах, с светлым выражением плоского лица.
	Он говорил на том изысканном французском языке, на котором не только говорили, но и думали наши деды, и с теми, тихими, покровительственными интонациями, которые свойственны состаревшемуся в свете и при дворе значительному человеку. Он подошел к Анне Павловне, поцеловал ее руку, подставив ей свою надушенную и сияющую лысину, и покойно уселся на диване.
	— Avant tout dites-moi, comment vous allez, chère amie? 5 Успокойте меня, — сказал он, не изменяя голоса и тоном, в котором из-за приличия и участия просвечивало равнодушие и даже насмешка.
	— Как можно быть здоровой... когда нравственно страдаешь? Разве можно, имея чувство, оставаться спокойною в наше время? — сказала Анна Павловна. — Вы весь вечер у меня, надеюсь?
	— А праздник английского посланника? Нынче середа. Мне надо показаться там, — сказал князь. — Дочь заедет за мной и повезет меня.
	— Я думала, что нынешний праздник отменен, Je vous avoue que toutes ces fêtes et tous ces feux d'artifice commencent à devenir insipides 6.
	— Ежели бы знали, что вы этого хотите, праздник бы отменили, — сказал князь по привычке, как заведенные часы, говоря вещи, которым он и не хотел, чтобы верили.
	— Ne me tourmentez pas. Eh bien, qu'a-t-on décidé par rapport à la dépêche de Novosilzoff? Vous savez tout 7.
	— Как вам сказать? — сказал князь холодным, скучающим тоном. — Qu'a-t-on décidé? On a décidé que Buonaparte a brûlé ses vaisseaux, et je crois que nous sommes en train de brûler les nôtres 8.
	Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов.
	Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться.
	В середине разговора про политические действия Анна Павловна разгорячилась.</p>
	<p>— Eh bien, mon prince. Gênes et Lucques ne sont plus que des apanages, des поместья, de la famille Buonaparte. Non, je vous préviens que si vous ne me dites pas que nous avons la guerre, si vous vous permettez encore de pallier toutes les infamies, toutes les atrocités de cet Antichrist (ma parole, j'y crois) — je ne vous connais plus, vous n'êtes plus mon ami, vous n'êtes plus мой верный раб, comme vous dites 1. Ну, здравствуйте, здравствуйте. Je vois que je vous fais peur 2, садитесь и рассказывайте.
	Так говорила в июле 1805 года известная Анна Павловна Шерер, фрейлина и приближенная императрицы Марии Феодоровны, встречая важного и чиновного князя Василия, первого приехавшего на ее вечер. Анна Павловна кашляла несколько дней, у нее был грипп, как она говорила (грипп был тогда новое слово, употреблявшееся только редкими). В записочках, разосланных утром с красным лакеем, было написано без различия во всех:
	«Si vous n'avez rien de mieux à faire, Monsieur le comte (или mon prince), et si la perspective de passer la soirée chez une pauvre malade ne vous effraye pas trop, je serai charmée de vous voir chez moi entre 7 et 10 heures. Annette Scherer» 3.
	— Dieu, quelle virulente sortie! 4 — отвечал, нисколько не смутясь такою встречей, вошедший князь, в придворном, шитом мундире, в чулках, башмаках и звездах, с светлым выражением плоского лица.
	Он говорил на том изысканном французском языке, на котором не только говорили, но и думали наши деды, и с теми, тихими, покровительственными интонациями, которые свойственны состаревшемуся в свете и при дворе значительному человеку. Он подошел к Анне Павловне, поцеловал ее руку, подставив ей свою надушенную и сияющую лысину, и покойно уселся на диване.
	— Avant tout dites-moi, comment vous allez, chère amie? 5 Успокойте меня, — сказал он, не изменяя голоса и тоном, в котором из-за приличия и участия просвечивало равнодушие и даже насмешка.
	— Как можно быть здоровой... когда нравственно страдаешь? Разве можно, имея чувство, оставаться спокойною в наше время? — сказала Анна Павловна. — Вы весь вечер у меня, надеюсь?
	— А праздник английского посланника? Нынче середа. Мне надо показаться там, — сказал князь. — Дочь заедет за мной и повезет меня.
	— Я думала, что нынешний праздник отменен, Je vous avoue que toutes ces fêtes et tous ces feux d'artifice commencent à devenir insipides 6.
	— Ежели бы знали, что вы этого хотите, праздник бы отменили, — сказал князь по привычке, как заведенные часы, говоря вещи, которым он и не хотел, чтобы верили.
	— Ne me tourmentez pas. Eh bien, qu'a-t-on décidé par rapport à la dépêche de Novosilzoff? Vous savez tout 7.
	— Как вам сказать? — сказал князь холодным, скучающим тоном. — Qu'a-t-on décidé? On a décidé que Buonaparte a brûlé ses vaisseaux, et je crois que nous sommes en train de brûler les nôtres 8.
	Князь Василий говорил всегда лениво, как актер говорит роль старой пиесы. Анна Павловна Шерер, напротив, несмотря на свои сорок лет, была преисполнена оживления и порывов.
	Быть энтузиасткой сделалось ее общественным положением, и иногда, когда ей даже того не хотелось, она, чтобы не обмануть ожиданий людей, знавших ее, делалась энтузиасткой. Сдержанная улыбка, игравшая постоянно на лице Анны Павловны, хотя и не шла к ее отжившим чертам, выражала, как у избалованных детей, постоянное сознание своего милого недостатка, от которого она не хочет, не может и не находит нужным исправляться.
	В середине разговора про политические действия Анна Павловна разгорячилась.</p>
	<p>— Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра. Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий. Что они сказали Новосильцеву? Ничего. Они не поняли, они не могли понять самоотвержения нашего императора, который ничего не хочет для себя и все хочет для блага мира. И что они обещали? Ничего. И что обещали, и того не будет! Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него... И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу. Cette fameuse neutralité prussienne, ce n'est qu'un piège 9. Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!.. — Она вдруг остановилась с улыбкой насмешки над своею горячностью.
	— Я думаю, — сказал князь, улыбаясь, — что, ежели бы вас послали вместо нашего милого Винценгероде, вы бы взяли приступом согласие прусского короля. Вы так красноречивы. Вы дадите мне чаю?
	— Сейчас. A propos, — прибавила она, опять успокоиваясь, — нынче у меня два очень интересные человека, le vicomte de Mortemart, il est allié aux Montmorency par les Rohans 10, одна из лучших фамилий Франции. Это один из хороших эмигрантов, из настоящих. И потом l'abbé Morio; 11 вы знаете этот глубокий ум? Он был принят государем. Вы знаете?
	— А! Я очень рад буду, — сказал князь. — Скажите, — прибавил он, как будто только что вспомнив что-то и особенно-небрежно, тогда как то, о чем он спрашивал, было главной целью его посещения, — правда, что l'impératrice-mère 12 желает назначения барона Функе первым секретарем в Вену? C'est un pauvre sire, ce baron, à ce qu'il paraît 13. — Князь Василий желал определить сына на это место, которое через императрицу Марию Феодоровну старались доставить барону.</p>
	<p>— Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра. Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий. Что они сказали Новосильцеву? Ничего. Они не поняли, они не могли понять самоотвержения нашего императора, который ничего не хочет для себя и все хочет для блага мира. И что они обещали? Ничего. И что обещали, и того не будет! Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него... И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу. Cette fameuse neutralité prussienne, ce n'est qu'un piège 9. Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!.. — Она вдруг остановилась с улыбкой насмешки над своею горячностью.
	— Я думаю, — сказал князь, улыбаясь, — что, ежели бы вас послали вместо нашего милого Винценгероде, вы бы взяли приступом согласие прусского короля. Вы так красноречивы. Вы дадите мне чаю?
	— Сейчас. A propos, — прибавила она, опять успокоиваясь, — нынче у меня два очень интересные человека, le vicomte de Mortemart, il est allié aux Montmorency par les Rohans 10, одна из лучших фамилий Франции. Это один из хороших эмигрантов, из настоящих. И потом l'abbé Morio; 11 вы знаете этот глубокий ум? Он был принят государем. Вы знаете?
	— А! Я очень рад буду, — сказал князь. — Скажите, — прибавил он, как будто только что вспомнив что-то и особенно-небрежно, тогда как то, о чем он спрашивал, было главной целью его посещения, — правда, что l'impératrice-mère 12 желает назначения барона Функе первым секретарем в Вену? C'est un pauvre sire, ce baron, à ce qu'il paraît 13. — Князь Василий желал определить сына на это место, которое через императрицу Марию Феодоровну старались доставить барону.</p>
	<p>— Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра. Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий. Что они сказали Новосильцеву? Ничего. Они не поняли, они не могли понять самоотвержения нашего императора, который ничего не хочет для себя и все хочет для блага мира. И что они обещали? Ничего. И что обещали, и того не будет! Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него... И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу. Cette fameuse neutralité prussienne, ce n'est qu'un piège 9. Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!.. — Она вдруг остановилась с улыбкой насмешки над своею горячностью.
	— Я думаю, — сказал князь, улыбаясь, — что, ежели бы вас послали вместо нашего милого Винценгероде, вы бы взяли приступом согласие прусского короля. Вы так красноречивы. Вы дадите мне чаю?
	— Сейчас. A propos, — прибавила она, опять успокоиваясь, — нынче у меня два очень интересные человека, le vicomte de Mortemart, il est allié aux Montmorency par les Rohans 10, одна из лучших фамилий Франции. Это один из хороших эмигрантов, из настоящих. И потом l'abbé Morio; 11 вы знаете этот глубокий ум? Он был принят государем. Вы знаете?
	— А! Я очень рад буду, — сказал князь. — Скажите, — прибавил он, как будто только что вспомнив что-то и особенно-небрежно, тогда как то, о чем он спрашивал, было главной целью его посещения, — правда, что l'impératrice-mère 12 желает назначения барона Функе первым секретарем в Вену? C'est un pauvre sire, ce baron, à ce qu'il paraît 13. — Князь Василий желал определить сына на это место, которое через императрицу Марию Феодоровну старались доставить барону.</p>
	<p>Анна Павловна почти закрыла глаза в знак того, что ни она, ни кто другой не могут судить про то, что угодно или нравится императрице.
	— Monsieur le baron de Funke a été recommandé à l'impératrice-mère par sa soeur 14, — только сказала она грустным, сухим тоном. В то время как Анна Павловна назвала императрицу, лицо ее вдруг представило глубокое и искреннее выражение преданности и уважения, соединенное с грустью, что с ней бывало каждый раз, когда она в разговоре упоминала о своей высокой покровительнице. Она сказала, что ее величество изволила оказать барону Функе beaucoup d'estime 15, и опять взгляд ее подернулся грустью.
	Князь равнодушно замолк, Анна Павловна, с свойственною ей придворною и женскою ловкостью и быстротою такта, захотела и щелкануть князя за то, что он дерзнул так отозваться о лице, рекомендованном императрице, и в то же время утешить его.
	— Mais à propos de votre famille, — сказала она, — знаете ли, что ваша дочь, с тех пор как выезжает, fait les délices de tout le monde. On la trouve belle comme le jour 16.
	Князь наклонился в знак уважения и признательности.
	— Я часто думаю, — продолжала Анна Павловна после минутного молчания, придвигаясь к князю и ласково улыбаясь ему, как будто выказывая этим, что политические и светские разговоры кончены и теперь начинается задушевный, — я часто думаю, как иногда несправедливо распределяется счастие жизни. За что вам дала судьба таких двух славных детей (исключая Анатоля, вашего меньшого, я его не люблю, — вставила она безапелляционно, приподняв брови), — таких прелестных детей? А вы, право, менее всех цените их и потому их не сто́ите.</p>
	<p>Анна Павловна почти закрыла глаза в знак того, что ни она, ни кто другой не могут судить про то, что угодно или нравится императрице.
	— Monsieur le baron de Funke a été recommandé à l'impératrice-mère par sa soeur 14, — только сказала она грустным, сухим тоном. В то время как Анна Павловна назвала императрицу, лицо ее вдруг представило глубокое и искреннее выражение преданности и уважения, соединенное с грустью, что с ней бывало каждый раз, когда она в разговоре упоминала о своей высокой покровительнице. Она сказала, что ее величество изволила оказать барону Функе beaucoup d'estime 15, и опять взгляд ее подернулся грустью.
	Князь равнодушно замолк, Анна Павловна, с свойственною ей придворною и женскою ловкостью и быстротою такта, захотела и щелкануть князя за то, что он дерзнул так отозваться о лице, рекомендованном императрице, и в то же время утешить его.
	— Mais à propos de votre famille, — сказала она, — знаете ли, что ваша дочь, с тех пор как выезжает, fait les délices de tout le monde. On la trouve belle comme le jour 16.
	Князь наклонился в знак уважения и признательности.
	— Я часто думаю, — продолжала Анна Павловна после минутного молчания, придвигаясь к князю и ласково улыбаясь ему, как будто выказывая этим, что политические и светские разговоры кончены и теперь начинается задушевный, — я часто думаю, как иногда несправедливо распределяется счастие жизни. За что вам дала судьба таких двух славных детей (исключая Анатоля, вашего меньшого, я его не люблю, — вставила она безапелляционно, приподняв брови), — таких прелестных детей? А вы, право, менее всех цените их и потому их не сто́ите.</p>
	<p>Анна Павловна почти закрыла глаза в знак того, что ни она, ни кто другой не могут судить про то, что угодно или нравится императрице.
	— Monsieur le baron de Funke a été recommandé à l'impératrice-mère par sa soeur 14, — только сказала она грустным, сухим тоном. В то время как Анна Павловна назвала императрицу, лицо ее вдруг представило глубокое и искреннее выражение преданности и уважения, соединенное с грустью, что с ней бывало каждый раз, когда она в разговоре упоминала о своей высокой покровительнице. Она сказала, что ее величество изволила оказать барону Функе beaucoup d'estime 15, и опять взгляд ее подернулся грустью.
	Князь равнодушно замолк, Анна Павловна, с свойственною ей придворною и женскою ловкостью и быстротою такта, захотела и щелкануть князя за то, что он дерзнул так отозваться о лице, рекомендованном императрице, и в то же время утешить его.
	— Mais à propos de votre famille, — сказала она, — знаете ли, что ваша дочь, с тех пор как выезжает, fait les délices de tout le monde. On la trouve belle comme le jour 16.
	Князь наклонился в знак уважения и признательности.
	— Я часто думаю, — продолжала Анна Павловна после минутного молчания, придвигаясь к князю и ласково улыбаясь ему, как будто выказывая этим, что политические и светские разговоры кончены и теперь начинается задушевный, — я часто думаю, как иногда несправедливо распределяется счастие жизни. За что вам дала судьба таких двух славных детей (исключая Анатоля, вашего меньшого, я его не люблю, — вставила она безапелляционно, приподняв брови), — таких прелестных детей? А вы, право, менее всех цените их и потому их не сто́ите.</p>
	<p>Анна Павловна почти закрыла глаза в знак того, что ни она, ни кто другой не могут судить про то, что угодно или нравится императрице.
	— Monsieur le baron de Funke a été recommandé à l'impératrice-mère par sa soeur 14, — только сказала она грустным, сухим тоном. В то время как Анна Павловна назвала императрицу, лицо ее вдруг представило глубокое и искреннее выражение преданности и уважения, соединенное с грустью, что с ней бывало каждый раз, когда она в разговоре упоминала о своей высокой покровительнице. Она сказала, что ее величество изволила оказать барону Функе beaucoup d'estime 15, и опять взгляд ее подернулся грустью.
	Князь равнодушно замолк, Анна Павловна, с свойственною ей придворною и женскою ловкостью и быстротою такта, захотела и щелкануть князя за то, что он дерзнул так отозваться о лице, рекомендованном императрице, и в то же время утешить его.
	— Mais à propos de votre famille, — сказала она, — знаете ли, что ваша дочь, с тех пор как выезжает, fait les délices de tout le monde. On la trouve belle comme le jour 16.
	Князь наклонился в знак уважения и признательности.
	— Я часто думаю, — продолжала Анна Павловна после минутного молчания, придвигаясь к князю и ласково улыбаясь ему, как будто выказывая этим, что политические и светские разговоры кончены и теперь начинается задушевный, — я часто думаю, как иногда несправедливо распределяется счастие жизни. За что вам дала судьба таких двух славных детей (исключая Анатоля, вашего меньшого, я его не люблю, — вставила она безапелляционно, приподняв брови), — таких прелестных детей? А вы, право, менее всех цените их и потому их не сто́ите.</p>
`;
const pageSize = 3; 
let currentPage = 0;
let pages = [];

function paginateText(text) {
	const paragraphs = text.trim().split('</p>');
	const pageCount = Math.ceil(paragraphs.length / pageSize);
	for (let i = 0; i < pageCount; i++) {
		const start = i * pageSize;
		const end = start + pageSize;
		pages.push(paragraphs.slice(start, end).join('</p>') + '</p>');
	}
}

function showPage(page) {
	bookContentElement.innerHTML = pages[page];
}

function prevPage() {
	if (currentPage > 0) {
		currentPage--;
		showPage(currentPage);
	}
}

function nextPage() {
	if (currentPage < pages.length - 1) {
		currentPage++;
		showPage(currentPage);
	}
}

document.getElementById('toggle-menu').addEventListener('click', function () {
	const sideMenu = document.getElementById('side-menu');
	if (sideMenu.style.right === '0px') {
		sideMenu.style.right = '-250px';
	} else {
		sideMenu.style.right = '0px';
	}
});

document.getElementById('darkModeToggle').addEventListener('change', function () {
	document.body.classList.toggle('dark-mode');
});

document.getElementById('textSizeRange').addEventListener('input', function () {
	const bookContent = document.getElementById('book-content');
	bookContent.style.fontSize = this.value + 'px';
});

document.getElementById('brightnessRange').addEventListener('input', function () {
	const readerContainer = document.getElementById('reader-container');
	readerContainer.style.filter = `brightness(${this.value}%)`;
});

paginateText(bookText);
showPage(currentPage);