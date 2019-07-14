
import React from "react"

const MailchimpForm = () => {
    const mcform = <form action="https://johncozen.us4.list-manage.com/subscribe/post?u=bebe3e81009fa4d540cd09723&amp;id=1479ded8e6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Useful tools and content coming soon, signup and get notified first</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_bebe3e81009fa4d540cd09723_1479ded8e6" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>

return (
        <div>
            {mcform}
        </div>
    )
    
}

export default MailchimpForm;