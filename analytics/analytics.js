// Google Analytics tracking to track clicks on your site
<script>
    function tracking() {
    ga('send', 'event', 'Category', 'Action', 'Name');
    }
</script>

<a href="#" class="button" onclick="tracking();">Button Text</a>

/* 
Above is the tracking script. Replace category, action, and name to fit your site.
Category is completely up to you. Is this marketing? Social sharing? etc. 
Action would be whatever action the user is taking. For example click or play (to play a media file).
Name is what the action is, once again this is up to you. You could say "playing podcast episode 8."
If you want multiple tracking events on the page, just change the name of the funciton. 
Our function is titled "tracking" and you would need to change it in the script and the button.
You would also need to make sure you've added Google Analytics to your project. 
AS A NOTE: It can take some time for events to begin to show in Google Analytics. 
You can find them under Behavior > Events in the sidebar of GA.
*/
