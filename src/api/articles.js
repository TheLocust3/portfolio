import _ from 'lodash';
import moment from 'moment';

export function getArchives(articles) {
  let unique = [];
  _.forEach(_.reverse(_.sortBy(articles, (article) => article.createdAt)), (article) => {
    let label = moment(article.createdAt).format('MMMM YYYY');
    let url = moment(article.createdAt).format('YYYY/MMMM');

    let entry = { label: label, url: url };
    if (_.reduce(unique, (acc, e) => acc && e.url !== entry.url, true)) {
      unique.push(entry);
    }
  });

  return unique;
}

export function filterByMonth(articles, year, month) {
  return articles.filter((article) => {
    return (
      _.lowerCase(moment(article.createdAt).format('YYYY MMMM')) === _.lowerCase(`${year} ${month}`)
    );
  });
}

export function getAllArticles() {
  return articles
}

export function getArticle(url) {
  return _.find(getAllArticles(), (article) => article.url === url)
}

const articles = [
  {
    title: "Find Un-Googleable Problems",
    image: "chaossearch.png",
    url: "find-un-googleable-problems",
    createdAt: "2020-08-23 19:42",
    body: `
    <p>
      Being a software developer means solving a never-ending stream of problems. The problems come in all shapes, from high-level system design, to the minutia of compiler errors. As my experience grows, I recognize patterns in the problems, and find some that repeat wholesale. Anyone who has written enough React knows that their problem has probably been solved already by someone on StackOverflow.
    </p>

    <p>
      I’ve done my time working in domains like this. Domains where the answer to most problems can be found on the internet. Where most of the work consists of effectively glueing other people’s solutions together. I was a plumber.
    </p>

    <p>
      When I first met Thomas Hazel, CTO and Founder of CHAOSSEARCH, he told me, “we’re not plumbers here.” That made enough sense to me, CHAOSSEARCH is a Boston startup building a Data Lake Analytic Platform backed by S3. To strip away the marketing lingo, we build a proprietary database on top of S3. Underneath the hood, there’s some breakthrough indexing/query technology orchestrated by a sprawling distributed system.
    </p>

    <p>
      I joined CHAOSSEARCH in January as a Northeastern Co-op and was immediately thrown into the deep end. After a lightning fast design session, I was tasked with building out our Real-Time feature. An alternate ingest path that allows customers to index data at low latencies through the familiar Elasticsearch Bulk API.
    </p>

    <p>
      From day one, I was tackling the complexities of a huge distributed system I knew nothing about. As I grow, I rediscover code I previously thought I understood, and realize the subtle complexities and constraints surrounding it. Each line of code and each solution fits perfectly into the larger puzzle. “The rabbit-hole is deep” as Tom likes to say.
    </p>

    <p>
      Distributed systems are inherently complex, a database even more so. I quickly realized that answers to the problems I was facing could no longer be found on the internet. You can learn about concepts like Repeatable Reads, but you won’t find an implementation guide or a pre-built package to drop into your system.
    </p>

    <p>
      Eight months later, my Co-op at CHAOSSEARCH is officially ending. When I started here, I remember how incredibly naive I was, yet right off the bat, the team put their trust in me. They never for one moment treated me as anything but a full-time employee, giving me the freedom and responsibility to grow. Working here has genuinely been a blast, and I’m excited to continue through the Fall and my next Co-op.
    </p>
    `
  },
  {
    title: "The 80-20 Rule of Distributed Systems",
    image: "complex.jpg",
    url: "the-80-20-rule-of-distributed-systems",
    createdAt: "2020-05-17 16:40",
    body: `
      <p>
        Distributed systems are hard. High performance, distributed systems are harder. In an environment like this, where seemingly unexplainable behavior arises every day, software estimation is nearly impossible.
      </p>

      <p>
        Just for a bit of background, I’m currently working at <a href="https://www.chaossearch.io/">CHAOSSEARCH</a>, a Boston startup building a Data Lake Analytic Platform backed by S3. For the past four months, I’ve been building out “Real-Time” events into our system. Essentially allowing users to insert documents and have them quickly indexed via the Elasticsearch Bulk API, rather than uploading documents in batches to S3 and waiting a few minutes.
      </p>

      <p>
        It took three months to get the feature to work. It took another month and a half to get the feature to work.
      </p>

      <p>
        In Month One, I was incredibly naive. After making rapid progress in a test environment, I felt that it would be a matter of weeks until Real-Time was out the door. But as I dove deeper into our system, the scope of the project expanded, and my mental deadline kept shifting further and further back.
      </p>

      <p>
        By Month Three with our eyes set on a customer release, I built out a stream of performance tests, latency tests, real-world tests, and stress tests. Every new test meant the unpleasant discovery of a half-dozen new bugs. A flow control issue here, a slow query there. Each bug forced me to grok portions of the code I had previously glossed over assuming that they “just worked.” It was hard, but I learned a lot.
      </p>

      <p>
        Developing a high performance, distributed system at scale is a genuinely difficult problem that Computer Science as a field is still grappling with. It’s incredibly hard to keep all the knowledge and constraints you need at a given time in your head. Sometimes, it feels like the system is displaying truly non-deterministic behavior. The sheer enormity of these systems and the infinite problem space is immensely rewarding. But it also makes software estimation near impossible.
      </p>

      <p>
        Software estimation fits nicely into the <a href="https://en.wikipedia.org/wiki/Johari_window">Johari Window</a>, famously described by Donald Rumsfeld (<a href="https://en.wikipedia.org/wiki/There_are_known_knowns">"There are known knowns"</a>). Classic estimation goes a bit like this. We estimate all of the items on our to-do list, all of our JIRA cards (“Known Knowns”). And then we pad it with some time for tasks we’re not so sure about (“Known Unknowns”).
      </p>

      <center>
        <img src="https://jakekinsella-portfolio.s3.amazonaws.com/images/blog/Johari_Window.PNG" />
        <br>

        Source <a href="https://en.wikipedia.org/wiki/Johari_window#/media/File:Johari_Window.PNG">Wikipedia</a>
      </center>

      <p>
        Of course, this is only accurate if we’ve accounted for all of the unknowns (that is, there exist no “Unknown Unknowns”). In real life, this is an unrealistic assumption. But even more so applied to complex systems. A distributed system is chock-full of “Unknown Unknowns.” Developers unaware of this end up sinking 80 percent of our time into what they thought was going to be 20 percent of the work.
      </p>

      <p>
        In a distributed system, “Unknown Unknowns” hide behind every corner. Simply adding concurrency into the mix adds whole new classes of bugs like race conditions and deadlocks. Distributing a program across machines introduces the possibility of network failures and synchronization issues. Combine that with a highly performant system moving terabytes of data all the time, and you quickly learn to expect the unexpected.
      </p>

      <p>
        At the beginning of Month Three, it felt like I only had a week or so of work left. I was dead wrong. The Real-Time project ended up taking nearly another month and a half to complete. And there’s still more work to do for future customers. I fell into the trap classic for junior developers like myself: I optimistically estimated the things I knew. So now, when I’m asked how long I think a project will take me, I defer. I ask other people I work with, I consider all the things I don’t know yet, and then I just tack on a bunch of extra time. Because I know that 80% of my time will be spent doing 20% of the work.
      </p>
    `
  },
  {
    title: "Finding the Right Fit",
    image: "hire.jpg",
    url: "the-right-fit",
    createdAt: "2020-02-26 19:02",
    body: `
      <p>
        Every year I research hundreds of companies, talk to dozens of executives, interview with a few engineers, and choose one internship. It’s the life of a student, hopping from internship to internship. And after five years of nearly consecutive searches, I know when a job “feels right.” But that’s just a feeling.
      </p>

      <p>
        The mythical “perfect” job doesn’t exist. The natural time pressure of a job hunt (a hard start date, juggling multiple job offers, etc) means that we’ll never get to sample every single company and choose the best one. So when a job “feels right,” we have to jump on it. But that’s not very scientific. We can’t run our lives on whims that we can’t explain with words. So I’ve put my feeling to paper and have outlined three traits that I judge every potential employer by.
      </p>

      <h2>Problem Space</h2>

      <p>
        First and foremost, I look to a company’s problem space. I filter for problem spaces that I have deep knowledge in. As an intern, you’re allowed to simply search for spaces that you have desire to learn more about. But as a full-time developer, you should refine your search to fields you already have a passion for. This not only increases your value to a company (think hireability), but also ensures that you’ll do something you love.
      </p>

      <p>
        Of all my factors, this is the easiest to judge. It’s simple, think buzzwords like Machine Learning, Big Data, or Cloud Computing and refine from there. If I find the problem space interesting, I learn more about the work. I need to both love the work (short term) and love the space (long term) to be passionate about my job.
      </p>

      <h2>Product/Mission</h2>

      <p>
        Next I start to look more into the product and the mission of the company. My best jobs are the ones where I’ve understood the need for the product and been myself aligned to the mission of the company. The equation is simple: interesting technical challenges make a job enjoyable and alignment with the mission makes a job meaningful.
      </p>

      <h2>Chemistry</h2>

      <p>
        Finally, I look to see if I connect with my would-be coworkers and the culture of the company. This is incredibly difficult to judge before without at the company. While interviewing, you only talk to a subset of people and you can’t possibly grasp something as amorphous as a company’s culture without living it. Maybe you click with your interviewers and maybe a company’s culture sounds appealing, but it’s impossible to know whether that’ll hold over the years.
      </p>

      <br />

      <p>
        Finding the right job is hard. There’s no other way of putting it. As a candidate, we’re working against a lack of information and time. But if we lay out what’s important to us, we can seek out the right information before making a decision. Through this, we can make a decision without relying on what “feels right.”
      </p>
    `
  },
  {
    title: "Being Treated Like an Adult",
    image: "threatstack.png",
    url: "being-treated-like-an-adult",
    createdAt: "2019-09-06 13:25",
    body: `
      <p>
        Over the summer, I interned at Threat Stack which I can confidently say was the most important four months of my life as a developer. Fundamentally it came down to they way they treated me and a culture of personal responsibility that really clicked with me.
      </p>

      <p>
        On my first day, my team lead told me to open up Jira and take a card. That’s it, I was shown the “platform diagram” (a map of countless microservices that make up the product) and told to have at it. It was overwhelming. But then I took my first card, I finished it, and I took another. The fear wore off and I learned a ton.
      </p>

      <p>
        At every step of the way my team happily answered my questions, helped me through deploys, and more. I felt constantly supported. But soon I realized that they weren’t doing all of this just because I was an intern who would need help. Over the months, I watched four people onboarded in the exact same way. I wasn’t treated any differently than other full-time software developers.
      </p>

      <p>
        As I progressed during my time at Threat Stack, my responsibilities grew. My manager would pull me aside and give me critical production tasks to do, I worked closely with architects to refactor important systems, and I was even involved in fixing critical production incidents as they happened. This didn’t all happen at once, when I mentioned to my manager how much I appreciated how they treated me he said that I had earned their trust and that they hadn’t done anything they wouldn’t do for a normal developer. They treated me like an adult.
      </p>

      <p>
        This seems experience seems so simple to outsiders, but it’s such a rare experience for interns. We’re often given solo projects, put on bug fixing duty, or, if we get lucky, allowed to work with QA. But being given the responsibilities of a software developer is like drinking from the fire hose. It’s a learning experience like no other.
      </p>

      <p>
        Threat Stack gave me the space to grow and didn’t put in place any artificial limits on my work simply because I was an intern. For four months I felt constantly challenged, valued, and learned an incredible amount.
      </p>

      <p>
        I have to complete two Co-ops (six month internships run by Northeastern) before I graduate. Threat Stack proved to me that I need to find that company where the title of Intern doesn’t carry baggage. I need to find that company that will let me earn the trust of my managers and coworkers. I need to find that company willing to treat an intern like an adult.
      </p>

      <p>
        <a href="https://www.threatstack.com/wp-content/uploads/2017/12/threat-stack-global-twitter-card.png">Image</a>
      </p>
    `
  },
  {
    title: "Whiteboard Interviews",
    image: "whiteboard.jpeg",
    url: "whiteboard-interviews",
    createdAt: "2019-08-11 10:56",
    body: `
      <p>
        It shouldn’t be surprising when I say that I don’t like whiteboard interviews. I’m pretty sure nobody does. It’s a sentiment among developers as old as time. Whiteboard interviews are a coming of age experience for us. Given a complex word problem, select and implement the correct algorithm that you were expected to memorize before the interview.
      </p>

      <p>
        Something about the mix of being put on the spot combined with the pressure of having to write code in front of someone else always gets to me. I generally do fine, I solve the problem, but not without a few embarrassing mistakes along the way.
      </p>

      <p>
        I replay these interviews in my head hundreds of times afterwards, and I always keep coming back to one question: what do these interviewers think they’re learning about me? What new data points were they getting that couldn’t be found in my portfolio, LinkedIn, GitHub repositories, or simply by talking to me?
      </p>

      <p>
        The specific traits that makes a talented developer are incredibly hard to define, and this ambiguity means that hiring is a really tough job. So I sympathize with them when they attempt to boil it all down to a question that they think is quantitative. My performance on an algorithmic question is easily compared to other candidates. But do I ever really need to recall the exact implementation of quick sort, or know how to traverse the strongly connected components of a directed acyclic graph with Kosaraju’s off the top of my head?
      </p>

      <p>
        At my internship, my company says that they hire for “attitude and aptitude” instead of looking for candidates with the right hard skills. Asking candidates to solve questions on a whiteboard doesn’t help them figure out whether they possess these attributes. So instead they get to know us as developers. This doesn’t take any more time than a whiteboard interview. It just requires companies to trust that their qualitative judgements about applicants are far more effective at getting the right developers than a whiteboard question.
      </p>

      <p>
        So I want to propose a compromise. As a candidate, my job is to prove that I’m the right fit for a company. So I’ll give companies as much data as I can provide: a resume, portfolio, LinkedIn, and Github projects. I’ll talk about my experience, the problems I’ve faced, and provide references from past coworkers. In return, I ask that companies evaluate me holistically, giving me the chance to show that I have the essential qualities that they’re looking for rather than the ability to cram for a test.
      </p>

      <p>
        <a href="https://unsplash.com/photos/3V8xo5Gbusk">Image</a>
      </p>
    `
  },
  {
    title: "Discovering Your Passion",
    image: "passion.jpeg",
    url: "discovering-your-passion",
    createdAt: "2019-07-28 17:00",
    body: `
      <p>
        Software development is a gigantic field. Not just in the millions of people in our industry or huge market cap attached to it, but in the sheer size and depth of topics we can apply our skills to. Basic programming skills enable us to take on wildly different tasks and completely different sub-fields all under the umbrella of computer science. It’s easy to say that you want to be a developer, but what we need to be asking is what sort of developer do we want to be? What subset of CS problems do we want to be solving day in and day out?
      </p>

      <p>
        Initially when this question was put to me, I would say that I wanted to do it all. I love the field of computer science and I don’t want to miss out on exciting parts of the field. However, as I progressed through my internships, I realized that specialization would allow me to experience the parts of software development that I love to the fullest.
      </p>

      <p>
        What I realized was simple, when you specialize, you choose a set of problems that you personally find the most compelling. You’ll come into work excited everyday because you love working on those specific tasks. Specializing gives you a chance to filter for only problems that you’re genuinely interested in working on.
      </p>

      <p>
        The second reason more capitalistic in nature: you’ll make more money. Choosing a sub-domain allows you to gain deeper knowledge in certain areas of computer science. This deep knowledge in turn makes you more attractive to companies. Not the most compelling reason for those of us who are programmers by passion, but it’s something we should consider.
      </p>

      <p>
        I’ve been going through this journey recently. Until a few months ago, I’ve always been interested in becoming a machine learning expert. As a junior developer, it’s hard not to get sucked in by the allure of sentient machines. But when it came to AI, I never got that moment where everything just clicked.
      </p>

      <p>
        Recently felt that click at my current internship. I work as a data engineer creating pipelines to process huge amounts of data so that customers can ask questions of this dataset (at least that’s my elevator pitch to my relatives). Something about the problem space speaks to me in a way that I hadn't felt before. Time will tell if this is really what I’m interested in, but it’s a start.
      </p>

      <p>
        So my advice junior developers like myself is to experience everything. From side-projects, to combing through old CS textbooks, just learn. I’ve found that internships are the best way to find that spark, but you might find it in an obscure GitHub repo. It doesn’t matter where you find your passion or whether it intentionally find it, it just matters that you find it.
      </p>

      <a href="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">Image</a>
    `
  },
  {
    title: "The Internship Ceiling",
    image: "ceiling.jpeg",
    url: "the-internship-ceiling",
    createdAt: "2019-06-14 18:40",
    body: `
      <p>
        There’s an invisible ceiling at the top of all jobs, some point where you aren’t learning or your career isn’t advancing as fast as you hoped for. Most companies have a plan for this. They promote, incentivize, and hand out larger opportunities as needed. They have to or they lose their employees, but there’s no need for a system of advancement for interns, employees who aren’t going to be there for the long haul anyways.
      </p>

      <p>
        As an intern, joining a new company is terrifying, you’re tossed into the middle of an unfamiliar world and you need to learn really fast while trying to exceed your co-workers’ expectations. The first month of an internship most concentrated learning environment I’ve ever experienced, but eventually tapers off. You’ll have learned the technology the company uses, figured out the language they speak, and you’ll begin to learn at a lower rate.
      </p>

      <p>
        This happens to full-time engineers of course, but it happens far sooner to interns simply because we aren’t there long enough and the work given to us reflects that. No matter how great we are as software developers, we can’t be given long term, important projects because we’ll be gone in a few months.
      </p>

      <p>
        I’m not going to advocate that the company does anything to fix this problem for interns. It’s enough of an opportunity to be given the chance to work as a developer, and the vast majority of interns won’t even get close to this ceiling. But some of us will, and instead of being handed advancement, we need to actively seek out opportunities to maximize the few short months we have.
      </p>

      <p>
        Three months in and I’ve hit this point at my current internship. I still love it but I notice that I feel comfortable and nearly complacent, so I set out to fix that. I started by seeking out new responsibilities as a developer. I sought out production access, asked to be put on call, and found larger projects to take on. Even if your company won’t let you do all of this, there’s no risk in asking. As my current manager told me when shutting down my dreams of being on-call: “I’ll ask my manager anyways, so you’ll get brownie points at least.”
      </p>

      <p>
        Next, I’ve been trying to expand my learning past development. I’ve been pushing to sit in on interviews, joining different trainings, and working to understand the organizational dynamics of my company. What’s important is that I’m still learning and pushing myself even if the company I work for has no formal paths for advancement as an intern.
      </p>

      <p>
        <a href="https://www.buildium.com/wp-content/uploads/2015/03/Boston-skyscraper.jpg">Image</a>
      </p>
    `
  },
  {
    title: "Why Do Companies Hire Interns?",
    image: "internship.jpg",
    url: "why-do-companies-hire-interns",
    createdAt: "2019-04-20 18:42",
    body: `
      <p>
        As interns, we don’t often think about why companies are offering internships in the first place. We know that internships help us kickstart our careers and build valuable stills, but why do companies hire us in the first place? With the answer to this question, we should be able to leverage it to clinch internships more successfully and to understand our fundamental role as an intern.
      </p>

      <p>
        In my experience, there are three root factors that explain why companies offer internships. I’ll start with the easy one: internships create a talent funnel for companies to fill future jobs. To think of it another way, companies are banking on us wanting to work for them in the future because we’ve interned with them.
      </p>

      <p>
        In essence, companies are getting a cheap “test phase” for future developers, and, if it works out, the ability to convert that into a full job. It’s easy to see the allure of a system like this. An internship pre-tests us, and companies know whether we’ll perform. It’s the ultimate reference check.
      </p>

      <p>
        The second incentive for companies to offer internships is that they’re getting cheap labor. This doesn’t always seem immediately obvious because a completely incompetent intern would logically be a drain of the company’s resources.
      </p>

      <p>
        This very problem is why screening interviews exist. After this, companies are hopefully left with the more skilled candidates, but still most interns don’t possess the skills to effectively contribute to a team, that’s why we’re interns. The question of whether a new intern can contribute weighs heavily on the minds of smaller companies. They know that their resources are stretched thin enough. But for larger companies, they have money and time to train interns and, even in the worst case, interns are cheap so they didn’t waste much money.
      </p>

      <p>
        Finally, companies offer internships as a way of giving back to the community. Generally, companies aren’t run be cold monsters who think only in dollar bills. Rather the leadership includes some talented developers or former-developers that remember being in college and want to help a few students succeed. People want to see themselves in younger students, to see the same potential in others that they see in themselves.
      </p>

      <p>
        If we recognize that companies are driven by these three incentives, we should be able align ourselves with these interests. That is, to convince whoever we are talking to that we might look to them as a future employer, that we’re highly-skilled and self-motivated, and finally that we remind them a bit of themselves. Now I’m not saying that anyone should come right out and say these things (please please please don’t), but if you can inspire these feelings, no one can say no to you.
      </p>

      <p>
        <a href="https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/prod/sites/388/2018/07/Hero_Still_1600x900_Maximize_Opt2_intern.jpg">Image</a>
      </p>
    `
  },
  {
    title: "The Internship Search",
    image: "search.png",
    url: "the-internship-search",
    createdAt: "2019-04-14 18:16",
    body: `
      <p>
        The search for a summer internship is a lot like a startup raising its first round of VC money: you get a lot of no’s, and you’re just looking for that one yes. It’s a long grueling process, involves loads of Excel spreadsheets, introductions, and countless meetings. However, while in the VC worlds there simply unfundable ideas, there are no unfundable people. Everyone is fit for an internship, it’s just a matter of your persistence.
      </p>

      <p>
        I want to start by flipping how looking for an internship is normally done on its head. There is one rule, you should never apply for an internship. By that, I mean you shouldn’t log onto a company’s website, upload your cover letter and résumé, and hope. Any company with an application process like this is getting hundreds of these from MIT students with incredible manicured résumés. We don’t want to compete with that so we have to change the game.
      </p>

      <p>
        There are four steps in getting an internship in this new paradigm: the introduction, the informational interview, the ask, and the interview-lite. This process isn’t résumé based and its often not based on your technical skills. We are all more than our résumés, but we can only explain this face-to-face.
      </p>

      <p>
        This starts as all overly planned projects do: an Excel spreadsheet. Here I list all my family, extended family, and friends. Anyone who might know someone in the tech world and would introduce me to them. I convert this into a list of those companies/people that they can connect me to by scouring their LinkedIn connections, and filter the result based on my interest and how likely I am to get an internship there (generally smaller equals more likely). In the end, I have 5-10 companies and people that I target.
      </p>

      <p>
        From there, I get email introductions to my targets from my connections, making sure that every week I’m sending out new emails. This is the easy part, the people you are asking for introductions from are invested in seeing you succeed, and will be happy to give you a glowing recommendation to a friend or co-worker.
      </p>

      <p>
        Next, we convert these into informational interviews. This is the magic bullet for this step. When you ask for an informational interview, an internship is always hovering over the conversation, but all you to deflect all the pressure that might come along with it. You’re asking the questions, making them talk rather than you.
      </p>

      <p>
        There’s a lot to say about informational interview technique (I’m sure I’ll write a post about this eventually), but to summarize it in a sentence: relax, be yourself, and bring a lot of questions. Remember, your talking to them because your better than your résumé, so make sure they come away with a strong understanding of you and your experience.
      </p>

      <p>
        With the informational interview out of the way, we move onto the ask. This is formulaic, I quickly follow up after the meeting thanking them and telling them how much I learned from them. Then I move onto asking whether it might be possible for me to intern at their company (yes I use this wishy-washy language). I jump into two or three sentences about why I’d be a good fit and my past experience, and I end the email thanking them for their consideration. Hit send and walk away. You’re anxious, I know how it feels.
      </p>

      <p>
        Most of these emails will come back with a soft no. Something like “we haven’t made decisions on interns yet,” or “can we check back in a month.” We don’t have this time, and they generally come back no anyways. Whatever, we add them to our LinkedIn network (to ask again next year of course), and move on. We’re looking for that one yes so we can’t stop and get discouraged. With some luck, we’ll get one or two “can you come back in to meet with the team”, or something like that.
      </p>

      <p>
        At this point, the decision maker, who we’ve hopefully already met with, has already made the decision to hire us. Meeting with the team is to make sure we know some of what we’ve been claiming. Sometimes you talk to an HR manager, sometimes a few software developers. Make a good impression on these people and you should receive an offer in a few days. Oh, and make sure you send a thank you email to every single person you talk to. It’s really easy and it makes a huge difference. Doesn’t it feel good when you get thanked? So thank them.
      </p>

      <p>
        I know I’ve made getting an internship sound easy, or at least quick. Let’s face it, it’s not. In the past I’ve gotten my offer a week or so before I’ve started. It’s stressful, but it’s worth it. These internships are not just résumé builders, but you meet the people that get you your next job, that get your next job, and so on. Internships help us kick start our careers, we need them and they’re worth all the effort we put into finding them.
      </p>

      <p>
        <a href="https://91acf2223c449e9aca09-573931475ab0c8bec3ec5b55f4da0a6c.ssl.cf1.rackcdn.com/images/KFE/Career_Corner/Horizontal_Article_Images_-_July_2017/7_reasons_to_do_an_internship_870x332.png">Image</a>
      </p>
    `
  },
  {
    title: "Hello World!",
    image: "hello-world.png",
    url: "hello-world",
    createdAt: "2019-03-24 15:03",
    body: `
      <p>
        I’m Jake Kinsella, “developer and aspiring entrepreneur” (in case you missed the huge text on the homepage). Before I get any further, I should probably explain what that means. Don’t worry I’m not going to explain to you what a developer does as if you’re a child, but explaining how those words relate to me will probably give you an understanding of why I’m writing this blog in the first place. 
      </p>

      <p>
        To start, I’m going to roll back the clock all the way to fourth grade when my dad taught me how to program. So yeah, I guess you could say that becoming a developer was expected of me. And if sitting a 10 year old down to teach him Ruby sounds absurd, you’re not alone. I remember crying, asking for my dad to explain the syntax for if-statements again, and him telling me to Google it (a particularly hard lesson for a fourth grader). But for some reason, I kept at it and it changed the course of my life. 
      </p>

      <p>
         Ever since then, I’ve been an avid programmer and I’ve had all sorts of internships at startups in Boston, experiences that have shaped me as a developer. Nowadays, I’m a freshman at Northeastern studying – you guessed it – Computer Science. 
      </p>

      <p>
         Before I get ahead of myself, I should probably explain the second half of that absurd caption that is fast becoming my personal brand: aspiring entrepreneur. For as long as I can remember, I’ve wanted to start a company of my own. That was probably my dad’s doing as well. He founded <a href="https://www.cloudhealthtech.com/">CloudHealth Technologies</a> nearly eight years ago which grew to a few hundred employees and was recently acquired by VMWare. Watching his passion and enthusiasm for building his company was infatuating. 
      </p>

      <p>
        Last summer, I decided that I mind as well try my hand at it. So I founded candidateXYZ, and I’ll bore you with all the details in a future article. In summary, I failed to find the right market and shut it down soon after starting college (although I had a pretty awesome product, if I do say so myself). But I’m sure I’ll try again, this time for “real” before I graduate from college. 
      </p>

      <p>
        Now that’s probably more than enough about me, so on to what this blog thing is about. I’ve wanted to start a blog for ages, but I couldn’t figure out my “angle.” That one topic that I was going to focus on that was unique and interesting and defining (yeah I put a lot of pressure on this decision). But with this portfolio site being a few months old, I’ve finally had the inspiration for what I wanted to write about.
      </p>

      <p>
        I’m a young, “junior” developer, trying to start my career in tech, but nobody talks about that, nobody talks about the beginning. Sure we all talk about learning to program, career advancement, management techniques, and starting companies, but nobody is out there talking about their experience just starting out. The awkward informational interviews, the failures to get internships, and the endless grind of building a passable resume. 
      </p>

      <p>
        I’m not going to pretend that I’ve gone through all there is (I’m 19, I’ve still a lot to go), or even that I’ve learned from all my mistakes, but I’m happy to share it all with you, and to laugh along at my ignorance. Hopefully we’ll all learn a little about being a junior dev, and, just maybe, make our experience just a little bit easier. 
      </p>

      <p>
        Image: <a href="https://en.wikipedia.org/wiki/File:HelloWorld.svg">https://en.wikipedia.org/wiki/File:HelloWorld.svg</a>
      </p>
    `
  }
]
