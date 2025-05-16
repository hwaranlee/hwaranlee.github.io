// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-activities",
          title: "activities",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/activities/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/cv_hwaranlee_250415.pdf";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-sumbt-larl-effective-multi-domain-end-to-end-neural-task-oriented-dialog-system-has-been-accepted-to-publish-in-ieee-access-hibiscus",
          title: 'Our work “SUMBT+LaRL: Effective Multi-domain End-to-end Neural Task-oriented Dialog System” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-work-reasoning-visual-dialog-with-sparse-graph-learning-and-knowledge-transfer-has-been-accepted-to-findings-of-emnlp-2021-cherry-blossom",
          title: 'Our work “Reasoning Visual Dialog with Sparse Graph Learning and Knowledge Transfer” has...',
          description: "",
          section: "News",},{id: "news-our-paper-talebrush-sketching-stories-with-generative-pretrained-language-models-has-been-accepted-to-chi-2022-four-leaf-clover",
          title: 'Our paper “TaleBrush: Sketching Stories with Generative Pretrained Language Models” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-plug-and-play-adaptation-for-continuously-updated-qa-has-been-accepted-to-findings-of-acl-2022-blossom",
          title: 'Our paper “Plug-and-Play Adaptation for Continuously-updated QA” has been accepted to Findings of...',
          description: "",
          section: "News",},{id: "news-we-will-organize-a-acm-facct-22-craft-workshop-on-hyperscalefacct-in-seoul-south-korea-sunny",
          title: 'We will organize a ACM FAccT’22 CRAFT (workshop) on HyperscaleFAccT in Seoul, South...',
          description: "",
          section: "News",},{id: "news-our-paper-masked-summarization-to-generate-factually-inconsistent-summaries-for-improved-factual-consistency-checking-has-been-accepted-to-findings-of-naacl-2022-tulip",
          title: 'Our paper Masked Summarization to Generate Factually Inconsistent Summaries for Improved Factual Consistency...',
          description: "",
          section: "News",},{id: "news-our-paper-why-knowledge-distillation-amplifies-gender-bias-and-how-to-mitigate-from-the-perspective-of-distilbert-has-been-accepted-to-gebnlp-workshop-at-naacl-2022-tulip",
          title: 'Our paper Why Knowledge Distillation Amplifies Gender Bias and How to Mitigate -...',
          description: "",
          section: "News",},{id: "news-i-m-serving-as-a-committee-member-of-the-2nd-forum-on-artificial-intelligence-ethics-and-policy-organized-by-the-ministry-of-science-and-ict-south-korea",
          title: 'I’m serving as a committee member of the 2nd Forum on Artificial Intelligence...',
          description: "",
          section: "News",},{id: "news-five-papers-square-kosbi-bayesian-red-teaming-critic-guided-decoding-claimdiff-are-accepted-at-acl-2023",
          title: 'Five papers (SQuARe, KoSBi, Bayesian Red Teaming, Critic-Guided Decoding, ClaimDiff) are accepted at...',
          description: "",
          section: "News",},{id: "news-hyperclova-x-and-clova-x-are-released-which-are-a-korean-llm-and-a-chat-based-service-from-naver-respectively-i-gave-a-short-talk-at-dan2023",
          title: 'HyperCLOVA X and CLOVA X are released, which are a Korean LLM and...',
          description: "",
          section: "News",},{id: "news-propile-was-accepted-at-neurips-2023-as-spotlight-and-prometheus-at-instruction-workshop-neurips-2023",
          title: 'ProPILE was accepted at NeurIPS 2023 as spotlight, and Prometheus at Instruction Workshop...',
          description: "",
          section: "News",},{id: "news-prometheus-was-accepted-at-iclr-2024",
          title: 'Prometheus was accepted at ICLR 2024. 🔥',
          description: "",
          section: "News",},{id: "news-kobbq-was-accepted-at-transactions-of-the-association-for-computational-linguistics-tacl",
          title: 'KoBBQ was accepted at Transactions of the Association for Computational Linguistics(TACL). 🇰🇷',
          description: "",
          section: "News",},{id: "news-lifetox-was-accepted-at-naacl-2024-️",
          title: 'LifeTox was accepted at NAACL 2024. 🌶️',
          description: "",
          section: "News",},{id: "news-five-main-sweet-apricot-findings-kornat-trap-timechara-papers-were-accepted-at-acl-2024",
          title: 'Five (Main: SWEET, APRICOT, Findings: KorNAT, TRAP, TimeChara) papers were accepted at ACL...',
          description: "",
          section: "News",},{id: "news-i-ll-serve-as-the-diversity-and-inclusion-chair-at-acl-2025",
          title: 'I’ll serve as the Diversity and Inclusion Chair at ACL 2025. 🌿💐',
          description: "",
          section: "News",},{id: "news-blend-paper-was-accepted-at-neurips-d-amp-amp-b-2024",
          title: 'BLEnD paper was accepted at NeurIPS D&amp;amp;amp;B 2024. 🥗',
          description: "",
          section: "News",},{id: "news-participated-in-colm-2024-as-a-panelist-at-the-multilinguality-and-llms-special-session",
          title: 'Participated in CoLM 2024 as a panelist at the Multilinguality and LLMs special...',
          description: "",
          section: "News",},{id: "news-attended-at-bay-area-safety-alignment-workshop-and-frontier-ai-safety-commitment-conference-which-are-invite-only",
          title: 'Attended at Bay Area Safety Alignment Workshop and Frontier AI Safety Commitment Conference,...',
          description: "",
          section: "News",},{id: "news-one-paper-guard-is-accepted-at-iclr-2025-and-two-papers-advisorqa-amp-amp-maqa-are-accepted-at-naacl-2025",
          title: 'One paper GUARD is accepted at ICLR 2025, and two papers AdvisorQA &amp;amp;amp;...',
          description: "",
          section: "News",},{id: "news-invited-talk-safe-and-trustworthy-ai-at-google-research-australia-in-sydney",
          title: 'Invited talk Safe and trustworthy AI at Google Research Australia in Sydney. 🇦🇺...',
          description: "",
          section: "News",},{id: "news-i-joined-the-department-of-artificial-intelligence-and-computer-science-amp-amp-engineering-in-sogang-university-as-an-assistant-professor",
          title: 'I joined the Department of Artificial Intelligence and Computer Science &amp;amp;amp; Engineering in...',
          description: "",
          section: "News",},{id: "news-one-paper-drift-is-accepted-at-bi-align-workshop-iclr-2025",
          title: 'One paper Drift is accepted at Bi-Align Workshop @ ICLR 2025',
          description: "",
          section: "News",},{id: "news-csrt-and-cscl-papers-will-be-presented-at-computational-approaches-to-linguistic-code-switching-workshop-naacl-2025",
          title: 'CSRT and CSCL papers will be presented at Computational Approaches to Linguistic Code-Switching...',
          description: "",
          section: "News",},{id: "news-invited-talk-evaluation-with-socio-cultural-awareness-and-multilingual-llms-at-sutd-ai-day-in-singapore",
          title: 'Invited talk “Evaluation with socio-cultural awareness and multilingual LLMs” at SUTD AI Day...',
          description: "",
          section: "News",},{id: "news-two-papers-csrt-main-and-cscl-findings-are-accepted-at-acl-2025",
          title: 'Two papers CSRT(main) and CSCL(findings) are accepted at ACL 2025.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%77%61%72%61%6E.%6C%65%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hwaranlee# your GitHub user name", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hwaranlee", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Jf6padoAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2294014", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/hwaran_lee", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
