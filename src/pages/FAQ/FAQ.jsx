import React from 'react'
import './FAQ.css';
import Navbar from '../../components/Navbar/Navbar';
import RightNavigation from '../../components/RightNavigation/RightNavigation';
import Bottom from '../../components/Bottom/Bottom';
const FAQ = () => {
  return (
    <div className='fav-main'>
<div>
 <Navbar></Navbar>
</div>
    
    <div className="faq-main-div editor">

        <div className= "faq-child1-div ">
        <h3 className='faq-head'>Frequently Asked Questions</h3>
        <div>
          <span>  What is Mantralekhan.com?</span>
            <p>Mantralekhan.com is a simple tool to enable devotees to please Bhagwan Swaminarayan by typing â€œSwaminarayanâ€ mahamantra online. <br />

Till date, thousands of people did bhajan by writing Swaminarayana mantra with pen and paper. This is an online tool which will enable computer savvy people to mantralekhan online whenever they have short time gat at work, travelling or at leisure.</p>
        </div>
        <div>
        <span>How does mantralekhan.com work?</span>
            <p>You can register by filling a simple form and start doing Swaminaryan mantralekhan immediately. This site also keeps log of total mantralekhan done by you.

Using this site is really simple. Once you log in, you see the big white textbox. You simply type â€œSwaminarayanâ€ and press enter key in your keyboard. This will be counted as 1 mantralekhan and will be saved in your account on this website. You again type â€œSwaminarayanâ€ and press enter key. And so on.

In one session, you should consider doing atleast 101 mantralekhan.

</p>
<div>
<span>But its artificial, not as good as writing on paper</span>
            <p>YThe concept of writing Swaminarayan mahamantra on a paper with red pen exists since years and thousands of people do that regularly â€“ to please Bhagwan Swaminarayan. The purpose of writing is the devotion towards Bhagwan Swaminarayan. The significance is not in writing but to remembering and chanting â€œswaminarayanâ€ mahamantra.

Not the concept but the motive behind writing on paper is important. This site is a digital version of the Mantralekhan concept. Technology helps to keep log of your mantra chanting and does it faster. Typing â€œSwaminarayanâ€ mantra on this site is lot faster than you do it on paper. Also using this site means, saving paper â€“ saving trees.

So, weâ€™d say that this idea is new, better and faster. Not artificial in anyway.

</p>
<span>This site does not work properly. I face some problem.</span>
            <p>Mantralekhan.com team is determined to make things work best for you. In case you encounter some problems on this site, make sure to observe following steps.

Use latest and good web browsers such as Mozilla Firefox, Safari, Opera or Google Chrome. We do NOT recommend Internet Explorer
Once you log in, make sure to let the page load properly before you start mantralekhan.
Try to refresh the page or, logout and log back in.
After doing mantralekhan, if you wish to take a break or going out, make sure to logout of the site ( even if you are taking just 5 minute break)
Kindly do contact us if you still face problems. Make sure to explain the problem in detail so we can help you

</p>
        </div>
        </div>
        </div>
        <div className= "faq-child2-div ">
       <RightNavigation/>
        </div>
    
    </div>
    <div>
      <Bottom/>
    </div>
    </div>
  );
}

export default FAQ