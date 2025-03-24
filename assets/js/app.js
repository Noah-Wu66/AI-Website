// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理移动端菜单
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // 添加或移除菜单打开时的样式
            if (this.classList.contains('active')) {
                this.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                this.children[1].style.opacity = '0';
                this.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                this.children[0].style.transform = 'none';
                this.children[1].style.opacity = '1';
                this.children[2].style.transform = 'none';
            }
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 关闭移动菜单(如果打开)
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.click();
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 导航栏滚动效果
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 0 rgba(0, 0, 0, 0.05)';
            }
        });
    }
    
    // 激活当前导航菜单项
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // 初始设置
    setActiveNavLink();
    
    // 应用卡片动画
    const animateOnScroll = () => {
        const appCards = document.querySelectorAll('.app-card');
        
        appCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 页面加载时应用卡片的初始状态
    const appCards = document.querySelectorAll('.app-card');
    appCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transitionDelay = `${index * 0.1}s`;
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 初始运行一次
    animateOnScroll();

    // 应用详情数据
    const appData = {
        deepseek: {
            name: "DeepSeek",
            category: "AI对话",
            icon: "assets/img/deepseek.png",
            intro: "DeepSeek是中国领先的人工智能公司，致力于通过通用人工智能技术推动人类文明进步，成立于2023年，总部位于杭州，在北京设有研发中心。公司聚焦AGI核心技术研发与产业应用，已推出DeepSeek-R1智能助手、高性能MoE大模型及多模态技术成果，秉持\"创新、实用、高效、可靠\"理念，构建开放生态，推动智能技术普惠化，其对话产品覆盖数亿用户，持续赋能搜索、教育、医疗等领域，致力于让AGI技术成为人人可享的生产力工具。",
            features: [
                "推理能力强大，在多项基准测试中表现优异，可与国际顶级模型媲美",
                "采用MoE (Mixture-of-Experts) 架构，总参数量达6710亿，但实际激活的只有370亿",
                "提供两款主要模型：DeepSeek-V3和DeepSeek-R1",
                "完全开源，代码、论文全部公开，用户可以免费使用并复制",
                "对中文和英文双语支持优秀，特别在中文基准表现上优异",
                "支持联网搜索功能，可获取实时信息"
            ],
            pros: "免费，本土最强大模型",
            cons: "官网版本服务器繁忙，第三方模型质量良莠不齐",
            website: "https://www.deepseek.com/",
            tutorial: "https://www.bilibili.com/video/BV1b8AkePEw4/"
        },
        doubao: {
            name: "豆包",
            category: "AI对话/AI绘画/AI工具",
            icon: "assets/img/doubao.png",
            intro: "豆包是由字节跳动公司基于自研的云雀大模型开发的AI智能助手，提供聊天对话、文本创作、英语学习、图像生成等多场景服务。自2023年8月上线以来，豆包通过\"高质低价\"策略迅速占领市场，其通用模型定价比行业低99%，日均Token使用量从1200亿增至4万亿，用户覆盖数亿，并成为全球月活跃用户第二的AI应用。豆包支持网页、iOS及安卓平台，内置角色扮演、语音合成、文生图等多样化模型，兼具实用性与趣味性，尤其受年轻用户青睐。截至2024年5月，豆包App总下载量突破1亿次，持续赋能搜索、教育、医疗等领域。",
            features: [
                "强大的对话能力，支持多轮连续对话，保持上下文连贯性",
                "个性化互动，能适应用户的交流风格和情感状态",
                "支持文案创作、文档阅读与分析、文本到图片生成、AI音乐生成等多种功能",
                "提供AI编程辅助，支持代码导入和GitHub仓库引入",
                "高效的信息搜索与整合能力，提供无广告纯净搜索体验",
                "支持个性化AI智能体创建，可自定义头像、昵称和角色描述",
                "跨平台支持，提供网页端、浏览器插件和多种客户端应用"
            ],
            pros: "免费，职场人士必备",
            cons: "模型参数偏弱，性能有待提升",
            website: "https://www.doubao.com/",
            tutorial: "https://www.bilibili.com/video/BV14dUTYbEdM/"
        },
        tongyi: {
            name: "通义千问",
            category: "AI对话/AI绘画/AI视频/AI工具",
            icon: "assets/img/tongyi.png",
            intro: "通义千问是由阿里云自主研发的通用人工智能大模型，前身为\"通义千问\"，于2023年4月开启内测，同年9月通过国内首批大模型备案后正式向公众开放。该模型基于Transformer架构，覆盖语言、语音、视觉等多模态能力，支持多轮对话、文案创作、逻辑推理、代码生成等场景，尤其以中文理解能力和长文本处理见长。通过持续迭代，其2024年发布的2.5版本在逻辑推理、指令遵循等核心能力上较前代提升9%-19%，中文表现持续领跑行业。",
            features: [
                "多领域卓越表现，在自然语言理解、数学问题解决和编程等方面表现优异",
                "易于定制和低成本部署，可在阿里云上快速部署和优化",
                "支持多模态数据理解，包括文本、音频、视频等内容",
                "提供图像生成和分析能力，可创建各种风格的图像",
                "音频理解与分析功能，可识别语音内容、音乐类型和情感",
                "结构化数据理解能力强，能有效处理表格等数据",
                "长文本生成能力显著提升，从1K提高到超过8K tokens",
                "提供Qwen-Agent框架，便于开发基于LLM的应用程序"
            ],
            pros: "免费，编程效果好，有很好用的效率小工具",
            cons: "模型生成速度慢",
            website: "https://tongyi.aliyun.com/",
            tutorial: "https://www.bilibili.com/video/BV1wt421L7H2/"
        },
        midjourney: {
            name: "Midjourney",
            category: "AI绘画",
            icon: "assets/img/midjourney.png",
            intro: "Midjourney是由David Holz于2022年创立的领先AI绘画工具，基于深度学习技术，用户可通过输入文本提示快速生成高质量艺术图像，涵盖写实、幻想、抽象等多种风格。该工具最初搭载于Discord平台，支持多轮迭代和参数调整，用户无需绘画技巧即可在数秒内获得创意成果。其核心优势在于强大的文本理解能力与高效生成速度，最新版本如v6.1进一步优化了图像细节、逻辑一致性和面部表现，并支持中文提示词，降低使用门槛，显著提升创作效率并降低传统设计成本。",
            features: [
                "生成极高质量的图像，具有艺术感和创造性",
                "支持各种风格和美学，从写实到抽象都能实现",
                "提供图像变体和细节控制，可调整图像比例和细节",
                "允许用户通过参数调整来控制生成效果",
                "适合艺术家、设计师和内容创作者使用",
                "持续更新模型，图像质量不断提升"
            ],
            pros: "效果极佳，无需自行部署，自行搭建，有网页端",
            cons: "贵，可调节参数太少，有审查",
            website: "https://www.midjourney.com/",
            tutorial: "https://www.bilibili.com/video/BV17gSAYqEzd/"
        },
        runway: {
            name: "Runway",
            category: "AI绘画/AI视频/AI工具",
            icon: "assets/img/runway.png",
            intro: "Runway 是一家专注于 AI 驱动的创意工具开发公司，致力于通过多模态 AI 技术革新影视制作、广告设计、艺术创作等领域。其核心产品包括视频生成模型 Gen-3 Alpha、图像生成工具 Frames 等，支持从文本、图像到视频的全流程创作，用户覆盖专业影视团队、设计师及个人创作者。",
            features: [
                "支持文本生成视频、图像生成视频、视频风格迁移等多种模式",
                "高保真视频生成模型，支持动态控制与复杂场景渲染，生成时长可达 15 秒",
                "内置剪辑、拼接、色彩调整、字幕添加等功能，可直接在浏览器中完成后期处理",
                "适配电影特效制作、广告创意、教育内容生成等领域，擅长动态视觉效果与风格化处理",
                "基于 Web 端开发，支持云端协作和实时编辑，降低专业创作门槛",
                "定期推出新模型并优化功能，保持行业领先",
                "提供定制化 AI 训练，允许用户上传数据训练专属风格模型"
            ],
            pros: "效果极佳，有很多小工具",
            cons: "贵，没有中文界面，网络卡",
            website: "https://runwayml.com/",
            tutorial: "https://www.bilibili.com/video/BV1hi421175Q/"
        },
        pika: {
            name: "Pika",
            category: "AI视频",
            icon: "assets/img/pika.png",
            intro: "Pika是由美国AI初创公司Pika Labs于2023年11月推出的视频生成与编辑工具，其核心是基于深度学习技术，支持通过文本、图像或现有视频快速生成高质量动态内容，并能对视频元素进行尺寸调整、风格转换、局部修改等精细化编辑。该工具以低门槛和高效率著称，用户无需专业技能即可在30秒内生成3D动画、动漫或电影风格视频，并支持添加爆炸、融化、膨胀等超现实特效以及电影级运镜效果。2025年推出的Pikadditions功能进一步突破，允许用户通过上传图片和提示词将任意对象无缝融入视频场景，极大降低了专业级视频创作的成本。成为全球用户活跃度领先的AI视频工具之一。",
            features: [
                "支持文本生成视频、图像生成视频",
                "提供动态特效生成",
                "内置多风格模板库",
                "支持逐帧编辑、关键帧控制与视频分辨率调整",
                "提供移动端应用，适配竖屏短视频创作",
                "开放API接口，支持与Unity/Unreal引擎集成"
            ],
            pros: "效果好，有特效预设，有扩展、局部修改功能",
            cons: "贵，没有中文界面，易封号，网络卡",
            website: "https://pika.art/",
            tutorial: "https://www.bilibili.com/video/BV1NiqoYKEFB/"
        },
        jimeng: {
            name: "即梦",
            category: "AI绘画/AI视频/AI音乐",
            icon: "assets/img/jimeng.png",
            intro: "即梦是由字节跳动旗下剪映团队开发的一站式AI创意平台，前身为\"Dreamina\"，2024年5月更名后全量上线，支持通过自然语言或图片生成图像与视频，提供首尾帧控制、运镜调节、速度调整等精细化编辑功能，并针对中文语义优化解析能力，可生成含中文字符的视觉内容，深度集成AI技术降低创作门槛，覆盖文生图、图生视频、多轨道分镜管理及智能画布工具，通过网页端、移动端及小程序多平台赋能影视、电商、游戏等领域的创意生产，融入灵感社区生态实现\"一键做同款\"，成为兼具实用性与创新性的全民级AI创作工具。",
            features: [
                "支持文本生成图像、视频、3D模型等多种内容",
                "提供丰富的预设风格和模板，便于快速创作",
                "生成内容质量高，符合国内用户审美",
                "支持批量生成和项目管理功能",
                "用户界面友好，上手简单",
                "持续更新模型和功能"
            ],
            pros: "模型多，生成速度快",
            cons: "效果一般",
            website: "https://jimeng.jianying.com/",
            tutorial: "https://www.bilibili.com/video/BV1Zni1YXEdY/"
        },
        cursor: {
            name: "Cursor",
            category: "AI编程",
            icon: "assets/img/cursor.png",
            intro: "Cursor是一款基于AI的专业代码编辑器，由前Replit联合创始人创建。它集成了先进的大型语言模型，提供智能代码补全、实时建议和自动修复功能，帮助开发者更高效地编写、理解和重构代码。其核心AI功能由强大的GPT-4模型驱动，可以理解代码上下文，生成符合项目风格的代码片段，解释复杂函数，并自动修复bug，支持超过20种编程语言。",
            features: [
                "强大的AI代码补全功能，根据上下文提供精准建议",
                "智能代码解释器，可分析和解释复杂代码段",
                "自动bug检测与修复功能",
                "代码重构与优化建议",
                "支持多种编程语言和框架",
                "集成版本控制系统",
                "内置终端和调试工具"
            ],
            pros: "免费版功能丰富，集成先进AI能力，界面友好易用",
            cons: "高级功能需付费，有时响应较慢，需要网络连接",
            website: "https://www.cursor.com/",
            tutorial: "https://www.bilibili.com/video/BV1zm4w1R7Me/"
        },
        trae: {
            name: "Trae",
            category: "AI编程",
            icon: "assets/img/trae.png",
            intro: "Trae是一款新兴的AI编程助手，专注于提供智能代码生成和优化服务。它利用先进的机器学习算法分析开发者的编码习惯和项目需求，提供定制化的编程建议。Trae支持多种主流编程语言，可以集成到各种开发环境中，帮助开发者提高编码效率和代码质量。",
            features: [
                "上下文感知的代码智能补全",
                "自然语言到代码转换功能",
                "代码重构与性能优化建议",
                "智能错误诊断与修复",
                "跨语言编程支持",
                "项目结构分析与建议",
                "代码文档自动生成"
            ],
            pros: "智能编程辅助功能强大，支持多种开发环境，学习能力好",
            cons: "产品较新，功能仍在完善中，社区资源相对有限",
            website: "https://trae.ai/",
            tutorial: "https://www.bilibili.com/video/BV1i2Pk7pxTa/"
        },
        kling: {
            name: "可灵",
            category: "AI绘画/AI视频",
            icon: "assets/img/kling.png",
            intro: "可灵是由快手公司于2024年6月推出的AI视频生成大模型，基于自研的3D时空联合注意力机制和Diffusion Transformer架构，支持文生视频、图生视频及视频续写功能，可生成1080p高清视频，时长最长可达3分钟，并模拟真实物理世界特性实现合理运动与光影效果。该模型支持自由宽高比输出，涵盖影视创作、广告营销、电商展示等场景，提供多档会员服务及灵感值计费体系，用户可通过网页端、移动端及API接入，并内置创意社区实现灵感共享与\"一键同款\"功能。",
            features: [
                "优秀的中文理解和生成能力",
                "支持多轮对话和上下文维护",
                "提供知识库集成和定制能力",
                "适合教育、客服等专业领域使用",
                "支持API接口调用和平台集成",
                "持续优化中文语义理解能力"
            ],
            pros: "质量最强AI视频生成工具，效果极佳",
            cons: "视频生成速度慢，生成内容审核较严格",
            website: "https://klingai.kuaishou.com/",
            tutorial: "https://www.bilibili.com/video/BV1a6vnefERd/"
        },
        minimax: {
            name: "MiniMax",
            category: "AI对话/AI绘画/AI视频/AI语音/AI音乐",
            icon: "assets/img/minimax.png",
            intro: "MiniMax是由前商汤科技副总裁闫俊杰于2021年12月创立的人工智能公司，专注于通用大模型研发与应用，已推出文本、语音、视觉多模态融合的MoE（混合专家）架构大模型ABAB系列及开源模型MiniMax-01系列。其核心产品包括虚拟聊天软件Glow、生成式对话AI产品Inspo及一站式AI创作平台海螺AI、沉浸式内容社区星野，广泛应用于智能客服、内容生成等领域。2025年发布的MiniMax-01模型采用线性注意力机制，支持400万token超长上下文处理，性能比肩GPT-4o等国际顶尖模型，并通过开放平台提供高性价比API服务，赋能企业智能化升级。",
            features: [
                "强大的中文理解和生成能力",
                "支持多模态输入，包括文本、图像",
                "提供丰富的API和SDK，便于集成开发",
                "注重安全性和伦理性，有内容审核机制",
                "持续更新模型和功能"
            ],
            pros: "综合最强AI视频生成工具，有主体、导演模式，效果极佳",
            cons: "贵，国内版内容审核较严格",
            website: "https://chat.minimaxi.com/",
            tutorial: "https://www.bilibili.com/video/BV1KPBqYEErU/"
        },
        yuewen: {
            name: "阶跃星辰",
            category: "AI对话/AI视频/AI语音",
            icon: "assets/img/yuewen.png",
            intro: "阶跃星辰是由前微软全球副总裁姜大昕于2023年4月创立的中国人工智能公司，总部位于上海，专注于通用人工智能技术研发，已推出Step系列大模型，包括万亿参数语言模型Step-2、多模态模型Step-1.5V及视频生成模型Step-Video-T2V等，覆盖文本、图像、语音、视频多模态能力，并在LiveBench等国际评测中位列国产大模型前列。公司凭借技术实力获数亿美元B轮融资，估值超20亿美元，团队汇聚ResNet作者张祥雨等顶尖人才，研发人员占比超80%，产品涵盖智能助手\"跃问\"、开放平台\"冒泡鸭\"，并开源多模态模型推动生态共建，赋能金融、智能汽车、手机终端等场景。",
            features: [
                "支持文本生成、图像创作和内容优化",
                "提供专业领域知识和创意内容生成",
                "适合内容创作者和媒体工作者使用",
                "中文优化，符合国内用户使用习惯",
                "支持批量生成和项目管理"
            ],
            pros: "免费",
            cons: "很小众，视频模型参数小",
            website: "https://yuewen.cn/",
            tutorial: "https://www.bilibili.com/video/BV1vuABewEs9/"
        },
        fishaudio: {
            name: "Fish Audio",
            category: "AI语音",
            icon: "assets/img/fishaudio.png",
            intro: "Fish Audio是一个专注于文本转语音与语音克隆的开源AI平台，基于VQ-GAN、Llama和VITS等前沿技术，支持中文、日语、英语等多语言的高质量语音合成及零样本语音克隆，用户可通过上传30秒音频样本快速生成个性化语音，并集成预置名人音色，其开源模型Fish Speech在GitHub获超7万星标，支持API调用与实时合成，适用于教育、视频配音、客户服务等场景，同时具备低显存需求及灵活部署选项。",
            features: [
                "支持文本到语音转换，质量接近真人",
                "提供多种音色和语言选择",
                "支持音乐生成和音频处理",
                "适合配音、教育和内容创作使用",
                "提供API接口，便于集成到其他应用",
                "批量处理功能强大，效率高",
                "持续优化音频质量和自然度"
            ],
            pros: "免费，效果极佳，生成内容审核较宽松",
            cons: "网页版有bug，容易卡住",
            website: "https://fish.audio/",
            tutorial: "https://www.bilibili.com/video/BV1jr421F7Pr/"
        },
        elevenlabs: {
            name: "ElevenLabs",
            category: "AI语音",
            icon: "assets/img/elevenlabs.png",
            intro: "ElevenLabs是由前谷歌工程师Piotr Dabkowski与Palantir前策略师Mati Staniszewski于2022年创立的AI语音公司，专注于开发支持29种语言的文本转语音、语音克隆及实时配音技术，其核心产品基于Eleven Multilingual v2模型，支持情感语调调节与零样本声音克隆，已获1.01亿美元融资，估值达11亿美元，赋能有声读物、影视配音及游戏开发等领域，合作伙伴涵盖Storytel、Paradox Interactive等企业，并通过API接口与网页/移动端平台提供低延迟语音生成服务。",
            features: [
                "生成超逼真的人声，自然度极高",
                "支持多种语言和方言，包括情感表达",
                "提供声音克隆功能，可复制特定声音",
                "适合有声读物、游戏配音和内容创作",
                "提供强大的API和开发工具",
                "持续更新语音模型，质量不断提升",
                "支持实时生成和批量处理"
            ],
            pros: "最强外文语音生成模型，功能丰富",
            cons: "中文语音生成差强人意",
            website: "https://elevenlabs.io/",
            tutorial: "https://www.bilibili.com/video/BV1LjmoYLEJJ/"
        },
        suno: {
            name: "Suno AI",
            category: "AI音乐",
            icon: "assets/img/suno.png",
            intro: "Suno AI是由前Kensho团队成员Mikey Shulman等机器学习专家于2022年创立的AI音乐生成平台，基于自研Chirp模型和深度学习技术，用户通过文本提示即可快速生成包含歌词、旋律、人声及伴奏的完整歌曲，支持流行、古典、电子等多样化风格及多语言创作，其2024年发布的V3版本可生成2分钟广播级音质音乐，同年获得1.25亿美元B轮融资，估值显著提升，成为全球用户活跃度领先的AI音乐工具，赋能个人创作者及企业高效实现音乐创作需求。",
            features: [
                "能够生成包含人声的完整歌曲",
                "根据文本描述创作不同风格的音乐",
                "支持多种音乐风格和情感表达",
                "生成质量高，接近专业制作水平",
                "简单易用，无需专业音乐知识",
                "适合内容创作、广告和娱乐使用",
                "持续更新音乐模型，增加新风格"
            ],
            pros: "效果好，功能多，业界天花板",
            cons: "贵，生成质量不稳定",
            website: "https://suno.com/",
            tutorial: "https://www.bilibili.com/video/BV1rs9bYoEtk/"
        },
        heygen: {
            name: "HeyGen",
            category: "AI语音/AI数字人",
            icon: "assets/img/heygen.png",
            intro: "HeyGen是由徐卓带领团队于2020年创立的AI数字人视频生成平台，总部位于深圳，基于深度学习技术实现虚拟形象生成、语音克隆及视频合成，用户通过输入文本即可快速创建多语言口型同步的数字人视频，应用于企业营销、教育培训、跨境电商等场景，2023年获B轮融资估值超4.5亿美元，服务全球超50万企业用户，提供API接口及SaaS平台接入，显著降低视频制作成本与门槛。",
            features: [
                "可生成逼真的数字人视频，口型同步准确",
                "支持多语言配音和翻译功能",
                "提供多种数字人形象和场景选择",
                "适合营销、教育和内容创作使用",
                "简单易用，无需专业视频制作知识",
                "支持批量生成和项目管理",
                "持续优化视频质量和自然度"
            ],
            pros: "全球最强数字人应用，功能极为丰富，效果最好",
            cons: "国内需使用Tun模式代理，全英文界面，数字人需本人认证，极为昂贵",
            website: "https://app.heygen.com/",
            tutorial: "https://www.bilibili.com/video/BV1Y1NcefEe8/"
        },
        hifly: {
            name: "飞影数字人",
            category: "AI语音/AI数字人",
            icon: "assets/img/hifly.png",
            intro: "飞影数字人是由上海灵之宇公司开发的AI数字人创作平台，用户通过上传5秒视频或照片即可快速复刻专属数字分身，支持个性化捏脸及AI声音克隆，并能通过文本或音频生成口型同步的逼真视频，适用于电商直播、口播短视频、广告营销等场景。其采用业界领先的建模技术实现秒级训练与生成，支持正脸、侧脸及动态场景的精准驱动，提供网页、小程序及API多端接入，以高效低成本的特性赋能企业品牌宣传与个人IP打造。",
            features: [
                "提供高质量的数字人视频生成服务",
                "支持多种形象和场景定制",
                "口型同步准确，表情自然",
                "支持批量生成和项目管理",
                "注重数据安全和隐私保护"
            ],
            pros: "性价比极高，同等价位效果最好",
            cons: "可调节参数少，功能少",
            website: "https://hifly.cc/",
            tutorial: "https://www.bilibili.com/video/BV13PqGYJE57/"
        }
    };
    
    // 处理模态对话框
    const modal = document.getElementById('appDetailModal');
    const websiteModal = document.getElementById('websiteModal');
    const closeBtn = document.querySelector('.close-modal');
    const detailBtns = document.querySelectorAll('.btn-detail');
    const websiteBtns = document.querySelectorAll('.website-btn');
    
    console.log("找到详情按钮数量:", detailBtns.length); // 调试信息
    console.log("找到网站按钮数量:", websiteBtns.length); // 调试信息
    
    // 打开模态对话框
    function openModal(appId) {
        console.log("打开模态框，应用ID:", appId); // 调试信息
        
        // 重置模态框内容的滚动位置到顶部（提前执行）
        const modalContent = document.querySelector('#appDetailModal .modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        if (appData[appId]) {
            const app = appData[appId];
            
            // 设置模态对话框内容
            document.getElementById('modalTitle').textContent = '应用详情';
            document.getElementById('modalAppIcon').src = app.icon;
            document.getElementById('modalAppName').textContent = app.name;
            document.getElementById('modalAppCategory').textContent = app.category;
            document.getElementById('modalAppIntro').textContent = app.intro;
            
            // 设置特点列表
            const featuresList = document.getElementById('modalAppFeatures');
            featuresList.innerHTML = '';
            app.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // 设置优缺点
            document.getElementById('modalAppPros').textContent = app.pros;
            document.getElementById('modalAppCons').textContent = app.cons;
            
            // 设置链接
            const websiteLink = document.getElementById('modalAppWebsite');
            websiteLink.href = app.website;
            websiteLink.textContent = app.website;
            
            // 处理网址标题和DeepSeek的多个网址
            const websiteTitle = document.getElementById('websiteTitle');
            const modalAppWebsites = document.getElementById('modalAppWebsites');
            const deepseekWebsites = document.getElementById('deepseekWebsites');
            
            if (appId === 'deepseek') {
                websiteTitle.textContent = '使用网址';
                modalAppWebsites.style.display = 'none';
                deepseekWebsites.style.display = 'block';
                
                // 更新DeepSeek的网址显示
                const deepseekLinks = deepseekWebsites.querySelectorAll('a');
                deepseekLinks[0].textContent = 'https://www.deepseek.com/';
                deepseekLinks[1].textContent = 'https://www.wenxiaobai.com/';
                deepseekLinks[2].textContent = 'https://yuanbao.tencent.com/';
                deepseekLinks[3].textContent = 'https://askmanyai.cn/';
            } else {
                websiteTitle.textContent = '官方网址';
                modalAppWebsites.style.display = 'block';
                deepseekWebsites.style.display = 'none';
            }
            
            const tutorialLink = document.getElementById('modalAppTutorial');
            tutorialLink.href = app.tutorial;
            tutorialLink.textContent = app.tutorial;
            
            // 显示模态对话框
            modal.classList.add('show');
            console.log("模态框已添加show类"); // 调试信息
            
            // 再次确保模态框内容滚动位置在顶部
            setTimeout(() => {
                modalContent.scrollTop = 0;
                console.log("再次设置滚动位置到顶部");
            }, 10);
            
            // 禁止背景滚动
            document.body.style.overflow = 'hidden';
        } else {
            console.error("找不到应用数据:", appId); // 调试信息
        }
    }
    
    // 关闭模态对话框
    function closeModal() {
        modal.classList.remove('show');
        console.log("模态框已移除show类"); // 调试信息
        
        // 恢复背景滚动
        document.body.style.overflow = 'auto';
    }
    
    // 打开网站选择弹窗
    function openWebsiteModal() {
        websiteModal.classList.add('show');
        // 禁止背景滚动
        document.body.style.overflow = 'hidden';
    }
    
    // 关闭网站选择弹窗
    function closeWebsiteModal() {
        websiteModal.classList.remove('show');
        // 恢复背景滚动
        document.body.style.overflow = 'auto';
    }
    
    // 使用事件委托处理详情按钮点击和网站按钮点击
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // 如果点击的是详情按钮
        if (target.classList.contains('btn-detail')) {
            const appId = target.getAttribute('data-app');
            console.log("通过事件委托点击了详情按钮:", appId); // 调试信息
            openModal(appId);
        }
        
        // 如果点击的是网站按钮
        if (target.classList.contains('website-btn')) {
            console.log("点击了网站按钮"); // 调试信息
            openWebsiteModal();
        }
        
        // 如果点击的是关闭按钮
        if (target.classList.contains('close-modal')) {
            if (modal.classList.contains('show')) {
                closeModal();
            }
            if (websiteModal.classList.contains('show')) {
                closeWebsiteModal();
            }
        }
        
        // 如果点击的是模态对话框背景
        if (target === modal) {
            closeModal();
        }
        if (target === websiteModal) {
            closeWebsiteModal();
        }
    });
    
    // 直接为每个详情按钮绑定点击事件（作为备份）
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const appId = this.getAttribute('data-app');
            console.log("直接绑定点击了详情按钮:", appId); // 调试信息
            openModal(appId);
        });
    });
    
    // 直接为每个网站按钮绑定点击事件（作为备份）
    websiteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log("直接绑定点击了网站按钮"); // 调试信息
            openWebsiteModal();
        });
    });
    
    // ESC键关闭模态对话框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (modal.classList.contains('show')) {
                closeModal();
            }
            if (websiteModal.classList.contains('show')) {
                closeWebsiteModal();
            }
        }
    });
}); 