<h1>Refrence:</h1>
This is an implemintation of https://ntrs.nasa.gov/citations/19660007973, specifically, equation 11.
<H2>So, what does this do?</h2>
Given a the position of the moon at time of impact (from Horizons https://ssd.jpl.nasa.gov/horizons/app.html#/), and the inclination of the orbit that will be launched into, there exists a time (ususally two times a day) that launching into this incination, and extending your orbit into a highly eliptical orbit that coincides at apogee to the orbit of the moon, will lead to you and the moon being in the same position. Instead of outputting a time, it outputs right acension - 90°, which is the longitude of the acending node, a value more useful to me for my usecase
<h2>Wait, What?</h2>
This lets you hit the moon, given a desired inclination, by telling you when to launch, or rather by giving you a vlaue you can use to time your launch.

<h2>Wait, Why?</h2>
<h3> Background </h3>
When I made this, I played a lot of Kerbal Space Program (KSP), with the mod (mod pack? mod ecosystem?) Realism Overhaul (RO). KSP is a videogame about deisging and flying spaceships in a 1/10th scale solar system, without many real world difficulties. Everything is small, no life support, no need for the crew to stretch their legs, no risk of engine failure, no boiloff, no radiation, everything is in the same plane, physics is a conic aproximation isntead of true N-body, etc. RO does what it claims: it overhauls the game in the name of realism. Everything I mentioned above as ignored in KSP is added in RO. KSP-RO is a painfull hell. Anyhow, I've put >2 kilohours into it. 
<h3> So... </h3>
For the playthrough I did summer 2020, before heading off to study Aerospace Engineering at GT, I wanted a new challenge, so I chose a launchsite that was too high in lattitude to simply launch into the plane of the moon. Therefore, I needed a way to fly to the moon without macthing planes with it during launch. I couldnt find a tool to do that, so I made this. The inputs, outputs, and functionality are therefore geared around what data I could get and what data I could input into Mechjeb 2 (the RO autopilot), hence not outputing a literal time. The math, as stated before, came from a 1965 paper, becuase, though i do have an intuitive grasp of orbital mechanics, i could not come up with this myself then, or even now, as a third-year-by-credit-hours student.
<h2>Can I use this?</h2>
Yes, you can. But dont. This is bad. Do it yourself from the paper, but better. 
  
