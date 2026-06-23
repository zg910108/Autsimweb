const audienceMeta = {
  public: {
    label: "社会公众",
    title: "理解差异，减少误解",
    description: "如果你想更了解孤独症，也想在学校、社区或日常相处中多一点理解和善意，可以从这里开始。",
  },
  parents: {
    label: "家长",
    title: "减少迷茫，专业赋能",
    description: "给正在陪孩子慢慢长大的家人。这里放着一些可操作的办法，也留给你一点喘息和力量。",
  },
  professionals: {
    label: "专业人士",
    title: "提升专业，精进技能",
    description: "给特教、康复、医疗等一线服务者，便于快速查找评估、干预和伦理实践中的关键资料。",
  },
};

const evidencePractices = [
  {
    name: "前事干预",
    code: "ABI",
    english: "Antecedent-Based Interventions",
    meaning: "在行为发生前调整环境、任务、提示或选择机会，降低困难行为出现的可能，也让合适行为更容易发生。",
    age: "NCAEP 证据覆盖 0-22 岁；常用于幼儿、学龄儿童和青少年，重点看目标行为与具体情境。",
  },
  {
    name: "辅助与替代沟通",
    code: "AAC",
    english: "Augmentative and Alternative Communication",
    meaning: "使用手势、图片、沟通板、语音输出设备或应用程序，帮助口语有限或沟通效率低的个体表达需求、想法和选择。",
    age: "可从早期沟通阶段开始使用，也适用于学龄期、青少年和成人；是否使用不应以“先等口语出来”为前提。",
  },
  {
    name: "行为动量干预",
    code: "BMI",
    english: "Behavioral Momentum Intervention",
    meaning: "先安排几项孩子容易完成、愿意配合的任务，再自然过渡到较困难的目标任务，借助连续成功提升参与度。",
    age: "常用于具备基本指令理解和任务参与基础的儿童与青少年；幼儿使用时需要把任务做得短、清楚、可成功。",
  },
  {
    name: "认知行为/认知教学策略",
    code: "CBIS",
    english: "Cognitive Behavioral/Instructional Strategies",
    meaning: "通过识别想法、情绪和行为之间的关系，练习问题解决、自我提示、情绪调节等策略。",
    age: "更常用于学龄儿童和青少年；需要一定语言理解、反思或符号表征能力，可按能力做视觉化改编。",
  },
  {
    name: "差别强化",
    code: "DR",
    english: "Differential Reinforcement",
    meaning: "有计划地强化替代行为、相容行为或其他合适行为，同时减少对目标困难行为的强化。",
    age: "可贯穿幼儿到青少年阶段；关键是先弄清行为功能，再选择真正能替代原有功能的行为。",
  },
  {
    name: "直接教学",
    code: "DI",
    english: "Direct Instruction",
    meaning: "用清楚的教学目标、示范、引导练习、及时反馈和巩固练习，系统教授学业或功能性技能。",
    age: "多用于学龄前后至青少年阶段；适合目标明确、需要逐步练习和反馈的技能。",
  },
  {
    name: "离散试验教学",
    code: "DTT",
    english: "Discrete Trial Training",
    meaning: "把技能拆成小步骤，通过明确指令、目标反应、即时反馈、强化和数据记录进行密集练习。",
    age: "常见于幼儿和学龄前儿童的早期干预，也可用于其他年龄的具体技能教学；需要注意泛化到自然生活。",
  },
  {
    name: "运动与动作活动",
    code: "EXM",
    english: "Exercise and Movement",
    meaning: "通过跑跳、体能活动、瑜伽、武术、舞蹈或动作游戏等，支持身体活动、情绪调节、注意和参与。",
    age: "可用于儿童和青少年；活动强度、规则和安全安排要按身体状况与兴趣调整。",
  },
  {
    name: "消退",
    code: "EXT",
    english: "Extinction",
    meaning: "当明确某个困难行为由特定后果维持时，有计划地停止提供该后果，并配合替代行为教学。",
    age: "可用于不同年龄，但不宜单独使用；实施前必须完成行为功能判断，并做好安全和情绪支持。",
  },
  {
    name: "功能行为评估",
    code: "FBA",
    english: "Functional Behavioral Assessment",
    meaning: "通过访谈、观察和数据分析理解行为在表达什么、获得什么或逃避什么，为行为支持计划提供依据。",
    age: "适用于幼儿、学龄儿童和青少年；当行为影响学习、关系或安全时尤其重要。",
  },
  {
    name: "功能沟通训练",
    code: "FCT",
    english: "Functional Communication Training",
    meaning: "基于行为功能，教孩子用更合适的沟通方式表达同样需求，例如请求帮助、休息、拒绝或获得物品。",
    age: "可从早期沟通阶段开始，也适用于学龄期和青少年；沟通形式可包含口语、手势、图片或 AAC。",
  },
  {
    name: "示范",
    code: "MD",
    english: "Modeling",
    meaning: "由成人、同伴或其他媒介先展示目标行为，让学习者通过观察理解“可以怎么做”。",
    age: "常用于幼儿到青少年；适合模仿、游戏、社交、生活自理和课堂规则等目标。",
  },
  {
    name: "音乐介入",
    code: "MMI",
    english: "Music-Mediated Intervention",
    meaning: "把歌曲、节奏、乐器或音乐互动作为教学媒介，促进沟通、轮替、模仿、参与和情绪调节。",
    age: "多用于儿童和青少年；更适合对音乐有兴趣或能从节奏结构中受益的个体。",
  },
  {
    name: "自然情境干预",
    code: "NI",
    english: "Naturalistic Intervention",
    meaning: "在游戏、日常活动和真实互动中跟随兴趣、创造沟通机会，并用自然后果强化目标行为。",
    age: "常用于幼儿和学龄前儿童，也可延伸到学龄期；核心是把练习放回真实生活。",
  },
  {
    name: "家长实施干预",
    code: "PII",
    english: "Parent-Implemented Intervention",
    meaning: "由专业人员培训和督导家长，把沟通、游戏、行为支持或生活技能练习嵌入家庭日常。",
    age: "尤其适合婴幼儿、学龄前和学龄儿童；青少年阶段也可用于家庭规则、自理和沟通目标。",
  },
  {
    name: "同伴介入",
    code: "PBII",
    english: "Peer-Based Instruction and Intervention",
    meaning: "训练和支持同伴在课堂、游戏或社区活动中发起互动、回应、合作和提供自然支持。",
    age: "多用于学龄前、学龄儿童和青少年；需要选择合适同伴，并保护双方的尊严和边界。",
  },
  {
    name: "提示",
    code: "PP",
    english: "Prompting",
    meaning: "用语言、手势、视觉、示范或身体辅助帮助学习者完成目标反应，并逐步撤除提示。",
    age: "可用于各年龄段；重点是及时淡化提示，避免孩子只在被提醒时才会做。",
  },
  {
    name: "强化",
    code: "R",
    english: "Reinforcement",
    meaning: "当目标行为出现后，提供对学习者有意义的结果，增加该行为未来再次出现的可能。",
    age: "适用于不同年龄；强化物应个体化、自然化，并逐步过渡到真实情境中的内在或社会性反馈。",
  },
  {
    name: "反应中断/重定向",
    code: "RIR",
    english: "Response Interruption/Redirection",
    meaning: "当重复或干扰性行为出现时，温和中断并引导到更合适的行为、活动或沟通方式。",
    age: "常用于儿童和青少年；应避免粗暴打断，最好与功能评估、替代技能和环境调整一起使用。",
  },
  {
    name: "自我管理",
    code: "SM",
    english: "Self-Management",
    meaning: "教学习者观察、记录和调节自己的行为，例如使用清单、计时器、目标表或自我奖励。",
    age: "更常用于学龄儿童和青少年；需要一定规则理解、等待和自我觉察能力，可用视觉工具降低难度。",
  },
  {
    name: "感觉统合",
    code: "SI",
    english: "Sensory Integration",
    meaning: "在受过训练的专业人员指导下，通过有结构的感觉-运动活动支持感觉调节和参与。",
    age: "多用于儿童；需要区分专业化感觉统合干预与普通“感统活动”，并用功能目标和数据评估效果。",
  },
  {
    name: "社会叙事",
    code: "SN",
    english: "Social Narratives",
    meaning: "用短文、图片或个性化故事说明一个情境中会发生什么、别人可能怎么想、自己可以怎么做。",
    age: "常用于学龄前后儿童至青少年；适合有一定图像或文字理解基础的个体。",
  },
  {
    name: "社交技能训练",
    code: "SST",
    english: "Social Skills Training",
    meaning: "通过明确教学、角色扮演、反馈和练习，帮助学习者理解并使用具体社交行为。",
    age: "多用于学龄儿童和青少年；需要把训练内容带到真实同伴互动中，避免只会“课堂里会”。",
  },
  {
    name: "任务分析",
    code: "TA",
    english: "Task Analysis",
    meaning: "把复杂技能拆成可教、可观察的小步骤，再按顺序或倒序逐步教学。",
    age: "适用于不同年龄；常用于生活自理、家务、职业准备、课堂任务和社区活动。",
  },
  {
    name: "技术辅助教学与干预",
    code: "TAII",
    english: "Technology-Aided Instruction and Intervention",
    meaning: "使用平板、电脑、应用、语音设备、视频或其他技术工具支持学习、沟通、社交和自我管理。",
    age: "可用于儿童和青少年；工具要服务于目标，而不是让设备替代真实互动。",
  },
  {
    name: "时间延迟",
    code: "TD",
    english: "Time Delay",
    meaning: "在提示前有意等待一小段时间，给学习者主动回应的机会，再按需要提供提示。",
    age: "常用于幼儿到学龄儿童，也可用于青少年功能技能；适合请求、命名、跟随步骤等目标。",
  },
  {
    name: "视频示范",
    code: "VM",
    english: "Video Modeling",
    meaning: "通过观看自己、同伴或成人完成目标行为的视频，帮助学习者理解步骤并进行模仿。",
    age: "多用于学龄前后至青少年；适合生活技能、社交规则、游戏和职业准备等目标。",
  },
  {
    name: "视觉支持",
    code: "VS",
    english: "Visual Supports",
    meaning: "用图片、文字、时间表、流程图、选择板或规则卡，把抽象信息变得可看见、可预测、可回看。",
    age: "可贯穿幼儿、学龄和青少年阶段；尤其适合转衔、等待、步骤执行和情绪调节支持。",
  },
];

function renderEvidencePracticeCards() {
  return evidencePractices
    .map(
      (practice) => `
          <details class="mini-card evidence-card">
            <summary>
              <span>${practice.name}</span>
              <small>${practice.code} / ${practice.english}</small>
            </summary>
            <p><strong>含义：</strong>${practice.meaning}</p>
            <p><strong>适用年龄：</strong>${practice.age}</p>
          </details>
        `,
    )
    .join("");
}

const panelContent = {
  public: [
    {
      title: "概念介绍",
      kicker: "定义与流行病学",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Autism Basics</p>
            <h3>孤独症不是“性格孤僻”，而是一种神经发育差异</h3>
            <p>孤独症谱系障碍是一组与脑发育相关的神经发育状况，常表现为社会沟通和互动困难，以及重复行为、兴趣范围较窄或感觉反应差异。</p>
          </div>
          <div class="status-panel">
            <strong>理解关键词</strong>
            <span>谱系、差异、支持需求、环境友好、长期发展</span>
          </div>
        </section>
        <div class="content-grid two">
          <section>
            <h4>先记住这几件事</h4>
            <ul class="fact-list">
              <li>能力与支持需求差异很大，并会随年龄、环境与支持方式变化。</li>
              <li>全球估计约每 127 人中有 1 人处于孤独症谱系；不同地区和研究方法下数据会有差异。</li>
              <li>美国 CDC 2022 年监测数据显示，8 岁儿童中约每 31 人有 1 人被识别为 ASD。</li>
            </ul>
          </section>
          <figure class="module-image image-card">
            <img src="material/行为表现.jpg" alt="孤独症常见行为表现示意图" loading="lazy" decoding="async" />
            <figcaption>以上图片展示的是孤独症孩子可能的表现。</figcaption>
          </figure>
        </div>
      `,
    },
    {
      title: "科普动画",
      kicker: "用短视频认识孤独症",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Animated Explainer</p>
            <h3>用一段动画，先有一个温和的开始</h3>
            <p>如果你刚开始了解孤独症，这段动画会比一长串概念更容易进入。它用直观的方式介绍核心特征，适合作为入门观看。</p>
          </div>
          <div class="status-panel">
            <strong>点击观看</strong>
            <span>点开下方图片，可跳转至哔哩哔哩观看。</span>
          </div>
        </section>
        <a
          class="video-cover"
          href="https://www.bilibili.com/video/BV1u5oMYREoB/?spm_id_from=333.337.search-card.all.click&vd_source=9597674837b82076bb3e1ea96925e283"
          target="_blank"
          rel="noreferrer"
          aria-label="打开孤独症科普动画视频"
        >
          <img src="assets/science-animation.png" alt="孤独症科普动画封面" loading="lazy" decoding="async" />
        </a>
      `,
    },
    {
      title: "早期识别",
      kicker: "发育行为预警征",
      wide: true,
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Early Signs</p>
            <h3>早发现不是贴标签，而是尽早获得支持</h3>
            <p>下面的内容参照“儿童心理行为发育问题预警征象筛查表”整理。它不是用来给孩子下结论的，而是提醒我们：如果某些信号持续出现，越早咨询专业人员，孩子和家庭就越早得到支持。</p>
          </div>
          <div class="status-panel">
            <strong>公众能做什么</strong>
            <span>提醒，但不吓唬；关注，但不急着贴标签。</span>
          </div>
        </section>
        <div class="data-table-wrap">
          <table class="data-table warning-table">
            <thead>
              <tr><th>年龄</th><th>需要关注的发育行为预警征象</th></tr>
            </thead>
            <tbody>
              <tr><td>12 月龄</td><td>呼唤名字无反应；不会挥手表示再见或拍手欢迎；不会用拇指和食指捏取小物品；不会扶物站立。</td></tr>
              <tr><td>18 月龄</td><td>不会有意识地叫“爸爸”“妈妈”；不会按要求指人或物；与人缺少目光对视；不会独走。</td></tr>
              <tr><td>24 月龄</td><td>不会说 3 个物品名称；不会按简单吩咐做事；不会用勺吃饭；不会扶栏上楼梯或台阶。</td></tr>
              <tr><td>30 月龄</td><td>兴趣单一或行为刻板；不会说 2-3 个字的短语；不会示意大小便；不会跑。</td></tr>
              <tr><td>36 月龄</td><td>不会双脚跳；不会模仿画圆；不会说自己的名字；不会玩假想游戏。</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "消除误解",
      kicker: "正确认识孤独症群体",
      wide: true,
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Myth Busting</p>
            <h3>减少误解，是支持的第一步</h3>
            <p>一句误解，可能会让一个家庭犹豫很久才敢求助；一点理解，也可能让孩子在学校、社区和公共空间里安心许多。</p>
          </div>
          <div class="status-panel">
            <strong>消除误解</strong>
            <span>点开卡片，看看误解背后的事实。</span>
          </div>
        </section>
        <div class="flip-grid" aria-label="孤独症常见误解澄清卡片">
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">孤独症是因为父母的冷漠引起的？</span>
              <span class="flip-face flip-back">不是。孤独症是神经发育障碍，与遗传和脑发育等多因素相关，不是父母“冷漠”或养育失败造成的。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">他们都是某些方面的天才？</span>
              <span class="flip-face flip-back">不是。孤独症群体能力差异很大，少数人有突出专长，更多人需要在沟通、学习、生活或情绪方面获得支持。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">孤独症长大就会好？</span>
              <span class="flip-face flip-back">不会简单“长大就好”。早期识别、科学干预、教育支持和友好环境能改善功能与生活质量。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">他们没有感情、常常攻击别人？</span>
              <span class="flip-face flip-back">不是。他们有情感和需求，只是表达方式可能不同。攻击行为通常与沟通困难、感官过载、焦虑或疼痛有关。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">疫苗会引起孤独症吗？</span>
              <span class="flip-face flip-back">没有证据表明疫苗会导致孤独症。大量高质量研究均未发现因果关系。接种疫苗能有效预防严重传染病。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">多带孩子玩就能治好孤独症？</span>
              <span class="flip-face flip-back">丰富的社会和游戏机会对发展有益，但不能替代基于评估的个性化支持与干预。多方面的综合支持更有效。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">孤独症只会发生在男孩？</span>
              <span class="flip-face flip-back">不是。男孩被识别的比例较高，但女生也会有孤独症，且常表现不同，容易被忽视或误诊。</span>
            </span>
          </button>
          <button class="flip-card" type="button" aria-pressed="false">
            <span class="flip-card-inner">
              <span class="flip-face flip-front">早期诊断会给孩子贴上标签，越早越不好？</span>
              <span class="flip-face flip-back">早期诊断有助于尽早获得支持和资源，改善长期发展。重要的是保护隐私并以尊重的方式使用诊断信息。</span>
            </span>
          </button>
        </div>
      `,
    },
    {
      title: "关爱行动",
      kicker: "4 月 2 日与日常支持",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Community Action</p>
            <h3>从理解走向日常支持</h3>
            <p>每年 4 月 2 日是世界提高孤独症意识日。它提醒我们，不只是在这一天点亮蓝色，更要在平常的相处里看见孤独症群体和家庭的真实需要。</p>
          </div>
          <div class="status-panel">
            <strong>友好原则</strong>
            <span>少围观、多等待；少评价、多询问；少替代、多尊重。</span>
          </div>
        </section>
        <div class="practice-grid">
          <section>
            <h4>社区和公共空间</h4>
            <ul class="plain-list">
              <li>遇到孩子情绪失控时，少一点围观和评价，多给家庭一点空间。</li>
              <li>在公共空间保留安静角、清晰标识和可预期的排队流程。</li>
            </ul>
          </section>
          <section>
            <h4>日常交流</h4>
            <ul class="plain-list">
              <li>说话尽量清楚、具体，给对方一点反应时间。</li>
              <li>尊重不同的表达方式，不把“不看眼睛”“不回应”简单理解成没礼貌。</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "影视印象",
      kicker: "从作品中看见真实处境",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Films & Stories</p>
            <h3>影视作品可以成为理解的入口</h3>
            <p>一部电影不能代表所有孤独症人士，却能让我们靠近一些真实的处境：家庭的爱、照护的难、旁人的误解，以及关系里慢慢长出的理解。</p>
          </div>
          <div class="status-panel">
            <strong>观看提醒</strong>
            <span>把作品当作理解的入口，而不是判断他人的模板。</span>
          </div>
        </section>
        <div data-public-films></div>
      `,
    },
  ],
  parents: [
    {
      title: "诊断后的第一步",
      kicker: "先稳住，再一步一步来",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">First 30 Days</p>
            <h3>先稳住家庭，再开始长期支持</h3>
            <p>拿到诊断后，很多家庭都会慌一下。请先记住：孩子还是那个孩子，诊断只是帮我们更清楚地看见他需要什么支持。</p>
          </div>
          <figure class="module-image first-step-image">
            <img src="assets/first-diagnosis-consultation.optimized.jpg" alt="家长带孩子与医生沟通评估和后续支持建议" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="content-grid two">
          <section>
            <h4>行动顺序</h4>
            <ol class="step-list">
              <li><span>允许自己震惊、难过或混乱。你不需要立刻变成“完美家长”。</span></li>
              <li><span>保留评估报告，向正规医院、妇幼保健或有资质机构了解复评和干预建议。</span></li>
              <li><span>询问当地残联、医保、教育和民政相关支持政策，确认申请条件和材料。</span></li>
              <li><span>和家人分一分工：就医、训练、学校沟通、财务、接送和照护替班，不要都压在一个人身上。</span></li>
              <li><span>为孩子建立基础档案：睡眠、饮食、过敏、感官偏好、沟通方式、喜欢的强化物和困难场景。</span></li>
            </ol>
          </section>
          <section>
            <h4>下次见医生或老师，可以这样问</h4>
            <ul class="plain-list">
              <li>孩子目前最需要支持的 3 个目标是什么？</li>
              <li>家庭每天能做哪些短时间、可重复的练习？</li>
              <li>是否需要语言、作业治疗、感觉统合、心理或睡眠相关评估？</li>
              <li>怎样判断机构方案是否适合孩子，怎样看训练记录？</li>
            </ul>
            <p class="note-box">不用一次解决所有问题。先让孩子安全、家人能睡一觉，关键的评估和支持别断线，就已经是在往前走。</p>
          </section>
        </div>
      `,
    },
    {
      title: "深入认识孩子",
      kicker: "懂您的孩子和无条件的爱同等重要",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Understand First</p>
            <h3>先看见孩子，再看见困难</h3>
            <p>孤独症儿童首先是孩子。他们有自己的感受、兴趣、害怕的事，也有表达爱的方式。很多看起来“故意作对”的行为，背后可能是感官太满、听不懂、说不出、太焦虑，或环境变化太突然。</p>
          </div>
          <figure class="module-image ten-things-cover">
            <img src="assets/book-ten-things-cover.jpg" alt="《孤独症孩子希望你知道的十件事》封面" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="insight-grid">
          <section><strong>1. 我首先是孩子</strong><span>请先叫我的名字，看见我的性格、喜好和正在长出来的可能。</span></section>
          <section><strong>2. 感官世界可能很强烈</strong><span>声音、灯光、气味、衣物触感都可能让孩子过载。</span></section>
          <section><strong>3. 区分“不愿意”和“做不到”</strong><span>很多失控不是故意对抗，而是孩子当下真的做不到。</span></section>
          <section><strong>4. 我更容易理解具体语言</strong><span>少用反话、隐喻和长串指令，改成清楚、短句、一步一步。</span></section>
          <section><strong>5. 请听见我的所有沟通</strong><span>眼神、动作、躲开、哭闹、重复提问，都可能是在表达需求。</span></section>
          <section><strong>6. 视觉信息能帮我学习</strong><span>图片、日程、步骤卡和示范，比单纯口头提醒更稳定。</span></section>
          <section><strong>7. 看见我能做什么</strong><span>用优势带动困难，比持续纠错更能建立安全感和动机。</span></section>
          <section><strong>8. 请教我如何加入别人</strong><span>社交不是自然发生的要求，可以被拆解、示范、练习。</span></section>
          <section><strong>9. 崩溃前通常有线索</strong><span>记录触发因素、身体信号和环境变化，比事后责备更有用。</span></section>
          <section><strong>10. 请无条件地爱我</strong><span>接纳不是放弃努力，而是在支持孩子时，也保留亲密和尊严。</span></section>
        </div>
        <p class="note-box">以上内容参考自《孤独症孩子希望你知道的十件事》。作者：[美]埃伦·诺特波姆；译者：秋爸爸、燕原；出版社：华夏出版社；出品方：华夏特教；出版年：2014-6。</p>
        <p class="note-box parent-reminder"><strong class="highlight-label">给家长的提醒：</strong>在急着“纠正”之前，先问问：这件事对孩子来说难在哪里？看见他的努力，接住他的情绪，再一步一步帮他参与生活。这种长期、温柔、稳定的陪伴，本身就是很重要的支持。</p>
      `,
    },
    {
      title: "推荐书籍清单",
      kicker: "给家长的分主题阅读路径",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Reading List</p>
            <h3>先选一本能解决当下困惑的书</h3>
            <p>孤独症的干预是一个长期的过程，家长作为孩子的“第一任老师”，在此过程中扮演着十分重要的角色，家长必须亲身参与其中，通过学习和实践给孩子提供专业的支持。阅读孤独症相关书籍既能提升家长对孤独症的理论知识，又能掌握孤独症家庭干预方法。</p>
          </div>
          <figure class="module-image parent-reading-image">
            <img src="assets/parent-reading-list.optimized.jpg" alt="家长在灯下阅读和记录孤独症相关书籍内容" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="book-grid">
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-esdm.jpg" alt="《孤独症儿童早期干预丹佛模式》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">早期干预</span>
              <h4>《孤独症儿童早期干预丹佛模式》</h4>
              <p>介绍 ESDM 如何把学习机会放进日常照护、游戏和互动中，适合希望在家里练习参与、沟通和模仿能力的家庭。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-social-play.jpg" alt="《孤独症儿童社交游戏训练：家长手册》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">社交游戏</span>
              <h4>《孤独症儿童社交游戏训练：家长手册》</h4>
              <p>以 Project ImPACT 为基础，强调家长在游戏中促进孩子的社交沟通、模仿和互动，是很适合家庭使用的实操手册。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-prt.jpg" alt="《教育自闭症孩子主动发起和自我管理》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">关键反应</span>
              <h4>《教育自闭症孩子主动发起和自我管理》</h4>
              <p>围绕关键反应训练，帮助家长理解如何提升动机、主动发起、回应和自我管理，适合已有一定互动基础的孩子。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-do-watch-listen-say.jpg" alt="《做·看·听·说》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">社交沟通</span>
              <h4>《做·看·听·说》</h4>
              <p>聚焦孤独症谱系障碍人士的社交和沟通能力干预，适合家长、教师和治疗师一起设计社交目标与练习活动。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-social-emotion.jpg" alt="《自闭症儿童社会-情绪教育实务工作手册》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">情绪教育</span>
              <h4>《自闭症儿童社会-情绪教育实务工作手册》</h4>
              <p>适合想帮助孩子认识情绪、理解社会情境和学习表达的家庭，也可作为学校或康复机构开展活动的参考。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-verbal-behavior.jpg" alt="《语言行为方法：如何教育孤独症和相关障碍儿童》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">语言行为</span>
              <h4>《语言行为方法：如何教育孤独症和相关障碍儿童》</h4>
              <p>从语言行为角度理解请求、命名、回应和对话，适合正在关注孩子沟通意图、表达功能和语言训练路径的家长。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-behavior-management-course.jpg" alt="《孤独症儿童行为管理策略及行为治疗课程》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">行为支持</span>
              <h4>《孤独症儿童行为管理策略及行为治疗课程》</h4>
              <p>帮助家长和专业人员理解行为管理的基本框架，适合用于梳理问题行为、替代行为和日常训练安排。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-aba-behavior-management.jpg" alt="《应用行为分析与儿童行为管理》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">ABA 基础</span>
              <h4>《应用行为分析与儿童行为管理》</h4>
              <p>适合想系统了解行为分析、强化、提示、数据记录和行为管理原则的读者，阅读时可结合专业督导使用。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-sos-parents.jpg" alt="《SOS！救助父母：处理儿童日常行为问题实用指南》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">日常养育</span>
              <h4>《SOS！救助父母》</h4>
              <p>面向儿童日常行为问题，语言较通俗。家长可用来学习清晰规则、稳定回应和正向教养的基本方法。</p>
            </div>
          </article>
          <article class="book-card">
            <figure class="book-cover">
              <img src="assets/book-discipline-0-8.jpg" alt="《0-8岁儿童纪律教育》封面" loading="lazy" decoding="async" />
            </figure>
            <div class="book-copy">
              <span class="book-tag">早期教养</span>
              <h4>《0-8岁儿童纪律教育》</h4>
              <p>从普通儿童发展和积极纪律角度提供建议，适合帮助家长把规则、边界和尊重放在一起考虑。</p>
            </div>
          </article>
        </div>
        <p class="note-box">提示：购买或借阅前，建议核对版本、译者和出版社；涉及干预方案的内容，应结合孩子的评估结果和专业人员建议使用。</p>
      `,
    },
    {
      title: "家庭干预指南",
      kicker: "社交、语言、生活自理与行为支持",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Home Practice</p>
            <h3>把干预嵌进真实生活</h3>
            <p>家庭康复不是把家变成训练室。更适合长期坚持的方式，是把小练习放进吃饭、洗漱、游戏、出门和睡前，让孩子在熟悉的生活里一点点成功。</p>
          </div>
          <figure class="module-image home-practice-image">
            <img src="assets/home-practice-mealtime.optimized.jpg" alt="家长在用餐场景中引导孩子观察牛奶盒并进行互动" width="900" height="720" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="practice-grid">
          <section>
            <h4>社交能力培养</h4>
            <ul class="plain-list">
              <li>从轮流、等待、共同注意开始，不急着要求复杂对话。</li>
              <li>把游戏拆成短回合：你推车、我推车；你搭一块、我搭一块。</li>
              <li>用同伴示范和角色扮演练习“加入游戏”“拒绝”“求助”。</li>
            </ul>
          </section>
          <section>
            <h4>语言沟通</h4>
            <ul class="plain-list">
              <li>AAC 或图片交换不是“放弃说话”，而是增加表达渠道。</li>
              <li>扩展沟通意图：从要东西，到拒绝、求助、评论、分享和提问。</li>
              <li>少连续提问，多用描述和等待，例如“车开走了……轮到你”。</li>
            </ul>
          </section>
          <section>
            <h4>生活自理</h4>
            <ul class="plain-list">
              <li>把洗手、穿衣、如厕、收纳拆成可视化步骤。</li>
              <li>先辅助成功，再逐步减少提示；不要一开始就要求完全独立。</li>
              <li>用固定位置、固定顺序和明确结束信号降低焦虑。</li>
            </ul>
          </section>
          <section>
            <h4>行为问题应对</h4>
            <ul class="plain-list">
              <li>先记录 ABC：行为前发生了什么、行为是什么、行为后得到了什么。</li>
              <li>判断功能：逃避任务、获得物品、寻求注意、感觉调节或身体不适。</li>
              <li>教替代行为：用图片说“休息”、用手势说“不要”、用卡片求助。</li>
            </ul>
          </section>
        </div>
        <div class="case-box">
          <strong>案例：</strong>孩子每次写字前尖叫。先记录前后事件，发现是任务太长且没有休息提示。可把任务拆成 3 分钟一段，增加“休息”图片请求，并强化安静求助。
        </div>
      `,
    },
    {
      title: "家长心理支持",
      kicker: "自我关怀、心理自测与静观练习",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Caregiver Well-being</p>
            <h3>照护者也需要被照护</h3>
            <p>长期照护真的会累，累到身体、睡眠、关系和钱包都被牵动。照顾好家长，不是自私；家长稳一点，孩子的世界也会更稳一点。</p>
          </div>
          <figure class="module-image caregiver-care-image">
            <img src="assets/caregiver-mindful-breathing.optimized.jpg" alt="照护者进行静观呼吸练习" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="content-grid three">
          <section>
            <h4><span class="support-icon care" aria-hidden="true"></span>自我关怀</h4>
            <ul class="plain-list">
              <li>给自己安排一点能做到的喘息时间，哪怕每次只有 20 分钟。</li>
              <li>保留一个“不谈训练”的家庭时段，只做轻松互动。</li>
              <li>把照护任务分给家人、亲友、社区或专业服务，不要一个人硬撑到底。</li>
            </ul>
          </section>
          <section>
            <h4><span class="support-icon check" aria-hidden="true"></span>心理自测</h4>
            <ul class="plain-list">
              <li>连续两周明显失眠、易怒、无望或频繁哭泣，建议寻求专业帮助。</li>
              <li>如果出现伤害自己或他人的想法，请立即联系当地急救、危机热线或可信任亲友。</li>
              <li>可以定期记录 0-10 分压力值，看见变化趋势。</li>
            </ul>
          </section>
          <section>
            <h4><span class="support-icon mindful" aria-hidden="true"></span>静观练习</h4>
            <ul class="plain-list">
              <li>一分钟呼吸：只观察吸气和呼气，不评价自己做得好不好。</li>
              <li>五感落地：说出 5 个看到的、4 个摸到的、3 个听到的事物。</li>
              <li>照护后复位：喝水、伸展肩颈、给自己一句具体肯定。</li>
            </ul>
          </section>
        </div>
        <p class="note-box">心理援助渠道示意：当地心理援助热线、12355 青少年服务台、医院心理门诊或社区家庭支持服务。</p>
      `,
    },
    {
      title: "专业资源链接",
      kicker: "政策申请、课程项目与可信网站",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Resource Map</p>
            <h3>先弄清楚去哪问、能办什么、怎么核实</h3>
            <p>各地政策和补贴不太一样，这里先帮你理出可以去哪里问、需要核实什么。具体条件、额度、材料和办理时间，还是要以当地主管部门的答复为准。</p>
          </div>
          <figure class="module-image parent-resource-image">
            <img src="assets/parent-resource-search.optimized.jpg" alt="家长在电脑前查询孤独症相关资源和政策信息" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="resource-grid">
          <a class="resource-card" href="https://www.cdpf.org.cn/" target="_blank" rel="noreferrer">
            <strong>补贴与救助申请指南</strong>
            <span>从中国残联和当地残联入口核实残疾评定、康复救助、辅具和教育支持政策。</span>
          </a>
          <a class="resource-card" href="https://www.cnautism.com/" target="_blank" rel="noreferrer">
            <strong>中国孤独症资源网</strong>
            <span>用于查找国内孤独症相关资讯、机构信息和家庭支持内容，访问状态请以实际打开为准。</span>
          </a>
          <a class="resource-card" href="https://www.who.int/teams/mental-health-and-substance-use/treatment-care/who-caregivers-skills-training-for-families-of-children-with-developmental-delays-and-disorders" target="_blank" rel="noreferrer">
            <strong>WHO-CST 照护者技能培训</strong>
            <span>面向发育迟缓或发育障碍儿童家庭，强调日常游戏、沟通、生活技能和照护者应对。</span>
          </a>
          <a class="resource-card" href="https://afirm.fpg.unc.edu/" target="_blank" rel="noreferrer">
            <strong>AFIRM 家庭可读模块</strong>
            <span>可学习视觉支持、强化、社交叙事、功能沟通等循证实践的操作思路。</span>
          </a>
          <a class="resource-card" href="https://www.cdc.gov/autism/treatment/index.html" target="_blank" rel="noreferrer">
            <strong>CDC 干预与治疗概览</strong>
            <span>了解不同干预类别，帮助家长和专业人员沟通目标与证据基础。</span>
          </a>
          <a class="resource-card" href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noreferrer">
            <strong>WHO 孤独症事实页</strong>
            <span>核对孤独症基本定义、支持需求和公共卫生视角。</span>
          </a>
        </div>
      `,
    },
  ],
  professionals: [
    {
      title: "孤独症概念演进",
      kicker: "从早期描述到神经多样性视角",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Concept History</p>
            <h3>概念演进影响评估、干预和伦理边界</h3>
            <p>我们今天理解孤独症，不再只看一个诊断名称，而是看一个人在不同年龄、不同环境中的沟通、学习、生活和支持需求。专业工作既要看标准，也要看具体的人。</p>
          </div>
          <figure class="module-image professional-concept-image">
            <img src="assets/professional-autism-wordcloud.optimized.jpg" alt="与孤独症相关的医学、教育和发展关键词词云" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-age">1940s</span>
            <p>Kanner 与 Asperger 的早期描述奠定了孤独症临床识别基础，但样本和理论解释有时代局限。</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-age">1980s-1990s</span>
            <p>诊断系统逐步将孤独症纳入广泛性发育障碍框架，临床开始重视儿童期发展轨迹。</p>
          </div>
          <div class="timeline-item">
            <span class="timeline-age">2013 至今</span>
            <p>DSM-5 使用“孤独症谱系障碍”整合相关亚型，并强调严重程度、语言和智力等说明指标。</p>
          </div>
        </div>
        <div class="content-grid two">
          <section>
            <h4>现代专业共识</h4>
            <ul class="plain-list">
              <li>孤独症是神经发育状况，不是由冷漠养育造成。</li>
              <li>核心特征与支持需求高度异质，需结合个体发展史和当前功能。</li>
              <li>评估应覆盖沟通、适应行为、认知、感官、情绪、睡眠和家庭环境。</li>
            </ul>
          </section>
          <section>
            <h4>实践含义</h4>
            <ul class="plain-list">
              <li>诊断标签不能替代个别化目标和跨场景功能分析。</li>
              <li>干预目标应服务于沟通、自主、参与和生活质量。</li>
              <li>尊重神经多样性视角，同时提供必要支持和风险管理。</li>
            </ul>
          </section>
        </div>
      `,
    },
    {
      title: "常用评估工具",
      kicker: "筛查、诊断、发展与功能评估",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Assessment Toolkit</p>
            <h3>工具服务于临床判断，而不是替代临床判断</h3>
            <p>一次好的评估，不只来自量表分数。发展史、现场观察、家庭和学校情境、语言认知、适应行为，以及文化和语言背景，都需要被放在一起看。</p>
          </div>
          <figure class="module-image professional-assessment-image">
            <img src="assets/professional-assessment.optimized.jpg" alt="评估清单和评估结果界面示意" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="data-table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>工具名称</th><th>主要用途</th><th>适用年龄/对象</th><th>实践提示</th></tr>
            </thead>
            <tbody>
              <tr><td>M-CHAT-R/F</td><td>幼儿孤独症风险筛查</td><td>16-30 月龄</td><td>阳性结果提示需进一步评估，不等同诊断。</td></tr>
              <tr><td>ADOS-2</td><td>半结构化观察，辅助 ASD 诊断</td><td>幼儿至成人，按模块选择</td><td>需受训施测并结合发展史与多源资料解释。</td></tr>
              <tr><td>ADI-R</td><td>照护者访谈，回顾早期发展和核心特征</td><td>心理年龄通常需达到一定水平</td><td>耗时较长，适合系统诊断评估。</td></tr>
              <tr><td>CARS-2</td><td>行为评分，估计孤独症相关特征严重程度</td><td>儿童及部分成人</td><td>可用于临床观察整理，但不宜单独下结论。</td></tr>
              <tr><td>PEP-3 / VB-MAPP</td><td>发展、学习和语言行为评估</td><td>学龄前或发展年龄较低儿童</td><td>更适合支持个别化教育和干预计划。</td></tr>
              <tr><td>Vineland-3 / ABAS</td><td>适应行为评估</td><td>儿童至成人</td><td>帮助判断真实生活支持需求和目标优先级。</td></tr>
            </tbody>
          </table>
        </div>
      `,
    },
    {
      title: "国际国内权威指南",
      kicker: "诊断、干预与服务路径参考",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Guidelines</p>
            <h3>指南用于校准方向，本地实践仍需结合服务系统</h3>
            <p>指南能帮我们少走弯路，但不能替代对眼前孩子和家庭的理解。阅读时要看适用年龄、服务场景、推荐强度，也要看哪些做法明确不推荐。</p>
          </div>
          <figure class="module-image professional-guidelines-image">
            <img src="assets/professional-guidelines.optimized.jpg" alt="指南和规范文件阅读场景示意" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="resource-grid">
          <a class="resource-card" href="https://www.nice.org.uk/guidance/cg128" target="_blank" rel="noreferrer">
            <strong>NICE：Autism spectrum disorder in under 19s</strong>
            <span>英国国家健康与临床优化研究所指南，聚焦 19 岁以下儿童青少年的识别、转介和诊断。</span>
          </a>
          <a class="resource-card" href="https://publications.aap.org/pediatrics/article/145/1/e20193447/36917/Identification-Evaluation-and-Management-of" target="_blank" rel="noreferrer">
            <strong>AAP：Identification, Evaluation, and Management of Children with Autism Spectrum Disorder</strong>
            <span>美国儿科学会关于儿童 ASD 识别、评估和管理的临床报告。</span>
          </a>
          <a class="resource-card" href="https://link.springer.com/article/10.1007/s00787-020-01587-4" target="_blank" rel="noreferrer">
            <strong>ESCAP：Practice Guidance for Autism</strong>
            <span>欧洲儿童与青少年精神病学学会实践指南，涵盖孤独症评估、支持和干预中的临床要点。</span>
          </a>
          <a class="resource-card" href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noreferrer">
            <strong>WHO：Autism spectrum disorders</strong>
            <span>公共卫生视角下的基本事实、支持需求和人权导向服务原则。</span>
          </a>
          <a class="resource-card" href="https://ncaep.fpg.unc.edu/" target="_blank" rel="noreferrer">
            <strong>NCAEP：Evidence-Based Practices for Autism</strong>
            <span>用于核对孤独症教育与行为干预循证实践的报告和实施资源。</span>
          </a>
          <a class="resource-card" href="http://www.nhc.gov.cn/" target="_blank" rel="noreferrer">
            <strong>国家卫健委：0-6岁儿童孤独症筛查干预服务规范（试行）</strong>
            <span>国内儿童孤独症早期筛查、转介、评估和干预服务的重要规范文件。</span>
          </a>
        </div>
      `,
    },
    {
      title: "循证干预方法",
      kicker: "以证据为基底，按个体需要调整",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Evidence-Based Practice</p>
            <h3>循证不是套用技术清单，而是匹配个体需求</h3>
            <p>孤独症的早期干预和康复训练要遵循循证的原则，美国孤独症循证实践国家资料库/清算中心公布了 28 种循证干预方法。</p>
          </div>
          <figure class="module-image professional-evidence-image">
            <img src="assets/professional-evidence-intervention.optimized.jpg" alt="专业人员在训练室支持儿童进行康复训练" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="method-grid evidence-grid">
          ${renderEvidencePracticeCards()}
        </div>
        <div class="reference-box" aria-label="循证干预参考文献">
          <strong>参考文献</strong>
          <ul class="plain-list">
            <li>Steinbrenner, J. R., Hume, K., Odom, S. L., et al. (2020). <em>Evidence-Based Practices for Children, Youth, and Young Adults with Autism</em>. The University of North Carolina at Chapel Hill, Frank Porter Graham Child Development Institute, National Clearinghouse on Autism Evidence and Practice Review Team.</li>
            <li><a href="https://ncaep.fpg.unc.edu/" target="_blank" rel="noreferrer">NCAEP：Evidence-Based Practices for Autism</a></li>
            <li><a href="https://afirm.fpg.unc.edu/" target="_blank" rel="noreferrer">AFIRM Modules：循证实践实施模块</a></li>
          </ul>
        </div>
      `,
    },
    {
      title: "研究进展",
      kicker: "近年方向与临床转化",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Research Trends</p>
            <h3>研究正在从“是否有效”走向“对谁、何时、如何有效”</h3>
            <p>近年的研究越来越关心真实世界里的问题：谁更适合哪种支持，什么时候介入更合适，家庭怎样参与，学校和社区怎样把服务长期做稳。</p>
          </div>
          <figure class="module-image professional-research-image">
            <img src="assets/reaserch.jpeg" alt="孤独症研究进展及转化示意" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="practice-grid">
          <section>
            <h4>早期与精准支持</h4>
            <ul class="plain-list">
              <li>关注婴幼儿早期风险识别、家庭介入和发展轨迹差异。</li>
              <li>从平均效果转向识别干预反应的个体差异和调节因素。</li>
            </ul>
          </section>
          <section>
            <h4>共病与全生命周期</h4>
            <ul class="plain-list">
              <li>重视 ADHD、焦虑、睡眠、癫痫、胃肠问题和情绪障碍共病。</li>
              <li>成人孤独症、就业、独立生活和心理健康支持逐渐受到更多关注。</li>
            </ul>
          </section>
          <section>
            <h4>实施科学</h4>
            <ul class="plain-list">
              <li>研究如何在学校、社区和基层医疗中保持干预质量。</li>
              <li>关注督导、培训、成本、家庭参与和服务公平性。</li>
            </ul>
          </section>
          <section>
            <h4>神经多样性与伦理</h4>
            <ul class="plain-list">
              <li>更强调尊重、参与、共同决策和生活质量。</li>
              <li>避免把目标设置为压制无害差异或追求“看起来正常”。</li>
            </ul>
          </section>
        </div>
        <div class="warning-box">
          <strong>伦理提醒：</strong>避免承诺“治愈”核心特征。NICE 不建议用螯合疗法、高压氧、分泌素等干预管理儿童孤独症；排除饮食也不应用于处理核心特征，除非另有明确医学适应证。
        </div>
      `,
    },
    {
      title: "专业资源链接",
      kicker: "数据库、组织与继续学习",
      html: `
        <section class="module-hero">
          <div>
            <p class="eyebrow">Professional Resources</p>
            <h3>建立可持续更新的专业资料库</h3>
            <p>专业人员需要不断学习，持续更新，更要保持专业判断：哪些是研究证据，哪些是临床经验，哪些只是包装得很漂亮的宣传。</p>
          </div>
          <figure class="module-image professional-resource-image">
            <img src="assets/professional-resource-network.optimized.jpg" alt="专业资源网络与云端资料库示意" width="900" height="900" loading="lazy" decoding="async" />
          </figure>
        </section>
        <div class="resource-grid">
          <a class="resource-card" href="https://www.autism-insar.org/" target="_blank" rel="noreferrer">
            <strong>INSAR</strong>
            <span>国际孤独症研究学会，适合跟踪会议、研究网络和领域动态。</span>
          </a>
          <a class="resource-card" href="https://journals.sagepub.com/home/aut" target="_blank" rel="noreferrer">
            <strong>Autism</strong>
            <span>孤独症领域同行评议期刊，覆盖临床、教育、服务和社会议题。</span>
          </a>
          <a class="resource-card" href="https://link.springer.com/journal/10803" target="_blank" rel="noreferrer">
            <strong>Journal of Autism and Developmental Disorders</strong>
            <span>发展障碍和孤独症研究的重要期刊之一。</span>
          </a>
          <a class="resource-card" href="https://ncaep.fpg.unc.edu/" target="_blank" rel="noreferrer">
            <strong>NCAEP</strong>
            <span>循证实践报告和相关资源，可用于校准教育与行为干预实践。</span>
          </a>
          <a class="resource-card" href="https://afirm.fpg.unc.edu/" target="_blank" rel="noreferrer">
            <strong>AFIRM</strong>
            <span>提供循证实践模块、操作材料和培训资源。</span>
          </a>
          <a class="resource-card" href="https://www.cochranelibrary.com/" target="_blank" rel="noreferrer">
            <strong>Cochrane Library</strong>
            <span>检索系统综述，用于判断干预证据质量和不确定性。</span>
          </a>
        </div>
      `,
    },
  ],
};

const parentBookModuleIndex = panelContent.parents.findIndex((module) => module.title === "推荐书籍清单");
const parentResourceModuleIndex = panelContent.parents.findIndex((module) => module.title === "专业资源链接");

if (
  parentBookModuleIndex >= 0 &&
  parentResourceModuleIndex >= 0 &&
  parentBookModuleIndex !== parentResourceModuleIndex - 1
) {
  const [parentBookModule] = panelContent.parents.splice(parentBookModuleIndex, 1);
  const nextParentResourceIndex = panelContent.parents.findIndex((module) => module.title === "专业资源链接");
  panelContent.parents.splice(nextParentResourceIndex, 0, parentBookModule);
}

const filmLinks = [
  {
    title: "海洋天堂",
    image: "material/海洋天堂剧照.jpg",
    url: "https://www.iqiyi.com/v_vjybumwwd0.html",
    description:
      "该片讲述了身患绝症的父亲王心诚与患有自闭症的儿子大福相依为命，在生命的最后几个月中，他倾尽所有为儿子的未来开始又一轮努力的故事。",
  },
  {
    title: "雨人",
    image: "material/雨人剧照.jpg",
    url: "https://www.bilibili.com/bangumi/play/ep332350",
    description:
      "该片讲述了查理发现父亲将遗产留给了患自闭症的哥哥雷蒙，便想骗取这笔财富，并计划利用哥哥超强的记忆力去赌博赚钱。但在此过程中，血缘的亲情打破了原有的疏离，真挚动人的手足之情取代了查理原先只求一己利益的私心。",
  },
];

const entryIcons = {
  public: `
    <svg class="entry-svg" viewBox="0 0 64 64">
      <circle cx="32" cy="18" r="9" />
      <circle cx="16" cy="24" r="7" opacity="0.78" />
      <circle cx="48" cy="24" r="7" opacity="0.78" />
      <path d="M18 52c2-12 9-19 14-19s12 7 14 19H18Z" />
      <path d="M4 52c2-10 7-16 12-16 4 0 8 3 10 8-3 2-5 5-7 8H4Z" opacity="0.78" />
      <path d="M45 52c-2-3-4-6-7-8 2-5 6-8 10-8 5 0 10 6 12 16H45Z" opacity="0.78" />
    </svg>
  `,
  parents: `
    <svg class="entry-svg" viewBox="0 0 64 64">
      <circle cx="26" cy="17" r="9" />
      <path d="M10 53c2-15 10-24 16-24s14 9 16 24H10Z" />
      <circle cx="45" cy="30" r="6" />
      <path d="M34 53c2-10 6-16 11-16s10 6 12 16H34Z" />
      <path d="M33 36c4 5 9 5 13 0" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
    </svg>
  `,
  professionals: `
    <img class="entry-image-icon" src="assets/doctor-logo.png" alt="" />
  `,
};

const content = document.querySelector("#audience-content");
const navButtons = document.querySelectorAll("[data-audience]");
const homeButton = document.querySelector("[data-home]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let currentAudience = "";

const guideLines = [
  "在浩瀚星河中，总有独特的星光需要被温柔注视",
  "孤独症（又称自闭症），全称“孤独症谱系障碍”。",
  "一个曾经陌生，如今却不断出现在大众视野的障碍名称。",
  "自1943年首次被医学界报告出来，历经80余年的认识和探索，",
  "其发病机制仍不甚明确，社会大众更是对其有着许多误解。",
  "因为他们常常显得与这个世界格格不入，而被称作“星星的孩子”。",
  "现在让我们一起走近他们。",
];

function setActiveAudience(audience) {
  navButtons.forEach((button) => {
    const isActive = button.dataset.audience === audience;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function restartAnimation() {
  content.classList.remove("fade-in");
  void content.offsetWidth;
  content.classList.add("fade-in");
}

function renderGuide() {
  currentAudience = "";
  setActiveAudience("");
  content.innerHTML = `
    <section class="guide-page" aria-labelledby="guide-title">
      <div class="guide-stars" aria-hidden="true">
        <span class="guide-star guide-star-large"></span>
        <span class="guide-star guide-star-medium"></span>
        <span class="guide-star guide-star-small"></span>
      </div>
      <div class="guide-copy">
        <p class="eyebrow">Autism Spectrum Knowledge Portal</p>
        <h1 id="guide-title">走近星星的孩子</h1>
        <div class="guide-lines">
          ${guideLines
            .map(
              (line, index) => `
                <p style="--line-index: ${index};">${line}</p>
              `
            )
            .join("")}
        </div>
        <button class="primary-button guide-start-button" type="button" data-start-journey>开启认识之旅</button>
      </div>
    </section>
  `;
  restartAnimation();
}

function renderWelcome() {
  currentAudience = "";
  setActiveAudience("");
  content.innerHTML = `
    <section class="intro-band welcome-intro" aria-labelledby="page-title">
      <div class="intro-copy">
        <p class="eyebrow">Autism Spectrum Knowledge Portal</p>
        <h1 id="page-title">科学、接纳、赋能</h1>
        <p class="intro-slogan">守护星星的孩子</p>
        <p class="intro-subtitle">构建理解的桥梁，让爱不再孤单</p>
      </div>
      <img
        class="intro-visual"
        src="assets/happy-children-900.webp"
        alt="一群儿童在户外开心互动"
        width="900"
        height="506"
        decoding="async"
        fetchpriority="high"
      />
    </section>
    <div class="section-heading">
      <h2>请选择您的身份进入专属空间</h2>
      <p>我们为您准备了定制化、分级的科普内容与专业支持工具。</p>
    </div>
    <div class="entry-grid">
      ${Object.entries(audienceMeta)
        .map(
          ([key, item]) => `
            <button class="entry-card" type="button" data-entry="${key}">
              <span class="entry-icon ${key}" aria-hidden="true">
                ${entryIcons[key]}
              </span>
              <h3>${item.label}</h3>
              <p>${item.description}</p>
            </button>
          `
        )
        .join("")}
    </div>
  `;
  restartAnimation();
}

function renderPublicFilms(variant = "section") {
  const className = variant === "inline" ? "film-section inline" : "film-section";
  return `
    <aside class="${className}" aria-labelledby="film-title">
      <div class="section-heading compact">
        <h3 id="film-title">影视印象</h3>
        <p>从不同的孤独症题材影视作品中认识孤独症群体。点击剧照可跳转观看链接。</p>
      </div>
      <div class="film-grid">
        ${filmLinks
          .map(
            (film) => `
              <a class="film-card" href="${film.url}" target="_blank" rel="noreferrer">
                <img src="${film.image}" alt="${film.title}剧照" loading="lazy" decoding="async" />
                <span class="film-copy">
                  <strong>${film.title}</strong>
                  <span>${film.description}</span>
                </span>
              </a>
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}

function renderModulePortal(audience, activeIndex = 0, focusTab = false) {
  const meta = audienceMeta[audience];
  const modules = panelContent[audience];
  const safeIndex = Math.min(Math.max(activeIndex, 0), modules.length - 1);
  const activeModule = modules[safeIndex];
  const sidebarLabels = {
    public: "公众认知路径",
    parents: "家长支持路径",
    professionals: "专业实践路径",
  };

  setActiveAudience(audience);
  currentAudience = audience;
  content.innerHTML = `
    <div class="section-heading audience-heading">
      <h2>${meta.title}</h2>
    </div>
    <div class="portal-layout audience-${audience}">
      <aside class="module-sidebar" aria-label="${meta.label}知识模块导航">
        <span class="sidebar-label">${sidebarLabels[audience] || "知识模块导航"}</span>
        <div class="module-tabs" role="tablist" aria-orientation="vertical">
          ${modules
            .map(
              (module, index) => `
                <button
                  id="${audience}-tab-${index}"
                  class="module-tab tone-${index % 6} ${index === safeIndex ? "is-active" : ""}"
                  type="button"
                  role="tab"
                  aria-selected="${index === safeIndex}"
                  aria-controls="${audience}-panel"
                  tabindex="${index === safeIndex ? "0" : "-1"}"
                  data-module-index="${index}"
                >
                  <span>${module.title}</span>
                  <small>${module.kicker}</small>
                </button>
              `
            )
            .join("")}
        </div>
      </aside>
      <article
        id="${audience}-panel"
        class="module-card module-page audience-${audience} tone-${safeIndex % 6}"
        role="tabpanel"
        aria-labelledby="${audience}-tab-${safeIndex}"
      >
        <span class="module-kicker">${activeModule.title}</span>
        <h3>${activeModule.kicker}</h3>
        ${activeModule.html}
      </article>
    </div>
  `;

  const filmsSlot = content.querySelector("[data-public-films]");
  if (filmsSlot) {
    filmsSlot.outerHTML = renderPublicFilms("inline");
  }
  restartAnimation();
  if (focusTab) {
    content.querySelector(`#${audience}-tab-${safeIndex}`)?.focus();
  }
  content.scrollIntoView({ block: "start", behavior: prefersReducedMotion ? "auto" : "smooth" });
}

function renderAudience(audience) {
  const meta = audienceMeta[audience];
  const modules = panelContent[audience];

  if (!meta || !modules) {
    renderWelcome();
    return;
  }

  renderModulePortal(audience);
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => renderAudience(button.dataset.audience));
});

content.addEventListener("click", (event) => {
  const startButton = event.target.closest("[data-start-journey]");
  if (startButton && content.contains(startButton)) {
    renderWelcome();
    content.scrollIntoView({ block: "start", behavior: prefersReducedMotion ? "auto" : "smooth" });
    return;
  }

  const entryButton = event.target.closest("[data-entry]");
  if (entryButton && content.contains(entryButton)) {
    renderAudience(entryButton.dataset.entry);
    return;
  }

  const tabButton = event.target.closest("[data-module-index]");
  if (tabButton && content.contains(tabButton) && currentAudience) {
    renderModulePortal(currentAudience, Number(tabButton.dataset.moduleIndex));
    return;
  }

  const flipCard = event.target.closest(".flip-card");
  if (flipCard && content.contains(flipCard)) {
    const isFlipped = flipCard.classList.toggle("is-flipped");
    flipCard.setAttribute("aria-pressed", String(isFlipped));
  }
});

content.addEventListener("keydown", (event) => {
  const tabButton = event.target.closest("[data-module-index]");
  if (!tabButton || !content.contains(tabButton) || !currentAudience) return;

  const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
  if (!keys.includes(event.key)) return;

  const modules = panelContent[currentAudience];
  if (!modules) return;

  event.preventDefault();
  const currentIndex = Number(tabButton.dataset.moduleIndex);
  const nextIndex =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? modules.length - 1
        : event.key === "ArrowDown" || event.key === "ArrowRight"
          ? (currentIndex + 1) % modules.length
          : (currentIndex - 1 + modules.length) % modules.length;

  renderModulePortal(currentAudience, nextIndex, true);
});

homeButton.addEventListener("click", (event) => {
  event.preventDefault();
  renderWelcome();
});

renderGuide();
