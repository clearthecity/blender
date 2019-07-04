<template>
<div id='markov-model'>

  <div class='form-inline'>
    <label for='how-many-sentences'>How many sentences should we write? </label>
    <input type='number' min='1' v-model='num_sentences' class='form-control ml-2' id='how-many-sentences'>
    <button type='button' class='btn btn-primary ml-2' v-on:click='makeAuthorChain'>Write</button>
  </div>

  <div v-if="author == 'Edgar Allan Poe'" id='text-EdgarAllanPoe' class='hide-me'>
  During the whole of a dull, dark, and soundless day in the
autumn of the year, when the clouds hung oppressively low in the
heavens, I had been passing alone, on horseback, through a
singularly dreary tract of country; and at length found myself,
as the shades of the evening drew on, within view of the
melancholy House of Usher.  I know not how it was--but, with the
first glimpse of the building, a sense of insufferable gloom
pervaded my spirit.  I say insufferable; for the feeling was
unrelieved by any of that half-pleasureable, because poetic,
sentiment, with which the mind usually receives even the sternest
natural images of the desolate or terrible.  I looked upon the
scene before me--upon the mere house, and the simple landscape
features of the domain--upon the bleak walls--upon the vacant
eye-like windows--upon a few rank sedges--and upon a few white
trunks of decayed trees--with an utter depression of soul which I
can compare to no earthly sensation more properly than to the
after-dream of the reveller upon opium--the bitter lapse into
everyday life--the hideous dropping off of the veil.  There was
an iciness, a sinking, a sickening of the heart--an unredeemed
dreariness of thought which no goading of the imagination could
torture into aught of the sublime.  What was it--I paused to
think--what was it that so unnerved me in the contemplation of
the House of Usher?  It was a mystery all insoluble; nor could I
grapple with the shadowy fancies that crowded upon me as I
pondered.  I was forced to fall back upon the unsatisfactory
conclusion, that while, beyond doubt, there are combinations
of very simple natural objects which have the power of thus
affecting us, still the analysis of this power lies among
considerations beyond our depth.  It was possible, I reflected,
that a mere different arrangement of the particulars of the
scene, of the details of the picture, would be sufficient to
modify, or perhaps to annihilate its capacity for sorrowful
impression; and, acting upon this idea, I reined my horse
to the precipitous brink of a black and lurid tarn that lay in
unruffled lustre by the dwelling, and gazed down--but with a
shudder even more thrilling than before--upon the remodelled and
inverted images of the grey sedge, and the ghastly tree-stems,
and the vacant and eye-like windows.

Nevertheless, in this mansion of gloom I now proposed to
myself a sojourn of some weeks.  Its proprietor, Roderick Usher,
had been one of my boon companions in boyhood; but many years had
elapsed since our last meeting.  A letter, however, had lately
reached me in a distant part of the country--a letter from
him--which, in its wildly importunate nature, had admitted of no
other than a personal reply.  The MS gave evidence of nervous
agitation.  The writer spoke of acute bodily illness--of a mental
disorder which oppressed him--and of an earnest desire to see me,
as his best, and indeed his only personal friend, with a view of
attempting, by the cheerfulness of my society, some alleviation
of his malady.  It was the manner in which all this, and much
more, was said--it was the apparent heart that went with his
request--which allowed me no room for hesitation; and I
accordingly obeyed forthwith what I still considered a very
singular summons.

Although, as boys, we had been even intimate associates, yet
I really knew little of my friend.  His reserve had been always
excessive and habitual.  I was aware, however, that his very
ancient family had been noted, time out of mind, for a peculiar
sensibility of temperament, displaying itself, through long ages,
in many works of exalted art, and manifested, of late, in
repeated deeds of munificent yet unobtrusive charity, as well as
in a passionate devotion to the intricacies, perhaps even more
than to the orthodox and easily recognisable beauties of musical
science.  I had learned, too, the very remarkable fact, that the
stem of the Usher race, all time-honoured as it was, had put
forth, at no period, any enduring branch; in other words, that
the entire family lay in the direct line of descent, and had
always, with very trifling and very temporary variation, so lain.
It was this deficiency, I considered, while running over in
thought the perfect keeping of the character of the premises with
the accredited character of the people, and while speculating
upon the possible influence which the one, in the long
lapse of centuries, might have exercised upon the other--it was
this deficiency, perhaps, of collateral issue, and the consequent
undeviating transmission, from sire to son, of the patrimony with
the name, which had, at length, so identified the two as to merge
the original title of the estate in the quaint and equivocal
appellation of the "House of Usher"--an appellation which seemed
to include, in the minds of the peasantry who used it, both the
family and the family mansion.

I have said that the sole effect of my somewhat childish
experiment--that of looking down within the tarn--had been to
deepen the first singular impression.  There can be no doubt that
the consciousness of the rapid increase of my superstition--for
why should I not so term it?--served mainly to accelerate the
increase itself.  Such, I have long known, is the paradoxical law
of all sentiments having terror as a basis.  And it might have
been for this reason only, that, when I again uplifted my eyes to
the house itself, from its image in the pool, there grew in my
mind a strange fancy--a fancy so ridiculous, indeed, that I but
mention it to show the vivid force of the sensations which
oppressed me.  I had so worked upon my imagination as really to
believe that about the whole mansion and domain there hung an
atmosphere peculiar to themselves and their immediate vicinity--an
atmosphere which had no affinity with the air of heaven, but
which had reeked up from the decayed trees, and the grey wall,
and the silent tarn--a pestilent and mystic vapour, dull,
sluggish, faintly discernible, and leaden-hued.

Shaking off from my spirit what must have been a dream,
I scanned more narrowly the real aspect of the building.  Its
principal feature seemed to be that of an excessive antiquity.
The discoloration of ages had been great.  Minute fungi
overspread the whole exterior, hanging in a fine tangled web-work
from the eaves.  Yet all this was apart from any extraordinary
dilapidation.  No portion of the masonry had fallen; and there
appeared to be a wild inconsistency between its still perfect
adaptation of parts, and the crumbling condition of the
individual stones.  In this there was much that reminded me of
the specious totality of old wood-work which has rotted for long
years in some neglected vault, with no disturbance from the
breath of the external air.  Beyond  this indication of
extensive decay, however, the fabric gave little token of
instability.  Perhaps the eye of a scrutinizing observer might
have discovered a barely perceptible fissure, which, extending
from the roof of the building in front, made its way down the
wall in a zigzag direction, until it became lost in the sullen
waters of the tarn.

Noticing these things, I rode over a short causeway to the
house.  A servant in waiting took my horse, and I entered the
Gothic archway of the hall.  A valet, of stealthy step, thence
conducted me, in silence, through many dark and intricate
passages in my progress to the studio of his master.  Much
that I encountered on the way contributed, I know not how, to
heighten the vague sentiments of which I have already spoken.
While the objects around me--while the carvings of the ceilings,
the sombre tapestries of the walls, the ebony blackness of the
floors, and the phantasmagoric armorial trophies which rattled as
I strode, were but matters to which, or to such as which, I had
been accustomed from my infancy--while I hesitated not to
acknowledge how familiar was all this--I still wondered to find
how unfamiliar were the fancies which ordinary images were
stirring up.  On one of the staircases, I met the physician of
the family.  His countenance, I thought, wore a mingled
expression of low cunning and perplexity.  He accosted me with
trepidation and passed on.  The valet now threw open a door and
ushered me into the presence of his master.

The room in which I found myself was very large and lofty.
The windows were long, narrow, and pointed, and at so vast a
distance from the black oaken floor as to be altogether inaccessible
from within.  Feeble gleams of encrimsoned light made their way
through the trellised panes, and served to render sufficiently
distinct the more prominent objects around; the eye, however,
struggled in vain to reach the remoter angles of the chamber, or
the recesses of the vaulted and fretted ceiling.  Dark draperies
hung upon the walls.  The general furniture was profuse,
comfortless, antique, and tattered.  Many books and musical
instruments lay scattered about, but failed to give any vitality
to the scene.  I felt that I breathed an atmosphere of sorrow.
An air of stern, deep, and irredeemable gloom hung over and
pervaded all.

Upon my entrance, Usher rose from a sofa on which he had
been lying at full length, and greeted me with a vivacious warmth
which had much in it, I at first thought, of an overdone
cordiality--of the constrained effort of the ennuye man of
the world.  A glance, however, at his countenance, convinced me
of his perfect sincerity.  We sat down; and for some moments,
while he spoke not, I gazed upon him with a feeling half of pity,
half of awe.  Surely, man had never before so terribly altered,
in so brief a period, as had Roderick Usher!  It was with
difficulty that I could bring myself to admit the identity of the
man being before me with the companion of my early boyhood.  Yet
the character of his face had been at all times remarkable.  A
cadaverousness of complexion; an eye large, liquid, and luminous
beyond comparison; lips somewhat thin and very pallid, but of a
surpassingly beautiful curve; a nose of a delicate Hebrew model,
but with a breadth of nostril unusual in similar formations; a
finely-moulded chin, speaking, in its want of prominence, of a
want of moral energy; hair of a more than web-like softness and
tenuity; these features, with an inordinate expansion above the
regions of the temple, made up altogether a countenance not
easily to be forgotten.  And now in the mere exaggeration of the
prevailing character of these features, and of the expression
they were wont to convey, lay so much of change that I doubted to
whom I spoke.  The now ghastly pallor of the skin, and the now
miraculous lustre of the eye, above all things startled and even
awed me.  The silken hair, too, had been suffered to grow all
unheeded, and as, in its wild gossamer texture, it floated rather
than fell about the face, I could not, even with effort, connect
its Arabesque expression with any idea of simple humanity.

In the manner of my friend I was at once struck with an
incoherence--an inconsistency; and I soon found this to arise
from a series of feeble and futile struggles to overcome an
habitual trepidancy--an excessive nervous agitation.  For
something of this nature I had indeed been prepared, no less by
his letter, than by reminiscences of certain boyish traits, and
by conclusions deduced from his peculiar physical conformation
and temperament.  His action was alternately vivacious and
sullen.  His voice varied rapidly from a tremulous indecision
(when the animal spirits seemed utterly in abeyance) to
that species of energetic concision--that abrupt, weighty,
unhurried, and hollow-sounding enunciation--that leaden,
self-balanced and perfectly modulated guttural utterance, which may
be observed in the lost drunkard, or the irreclaimable eater of
opium, during the periods of his most intense excitement.

It was thus that he spoke of the object of my visit, of his
earnest desire to see me, and of the solace he expected me to
afford him.  He entered, at some length, into what he conceived
to be the nature of his malady.  It was, he said, a
constitutional and a family evil, and one for which he despaired
to find a remedy--a mere nervous affection, he immediately added,
which would undoubtedly soon pass off.  It displayed itself in a
host of unnatural sensations.  Some of these, as he detailed
them, interested and bewildered me; although, perhaps, the terms,
and the general manner of the narration had their weight.  He
suffered much from a morbid acuteness of the senses; the most
insipid food was alone endurable; he could wear only garments of
certain texture; the odours of all flowers were oppressive; his
eyes were tortured by even a faint light; and there were but
peculiar sounds, and these from stringed instruments, which did
not inspire him with horror.
  </div>

  <div v-if="author == 'Henry James'" id='text-HenryJames' class='hide-me'>
  It had occurred to her early that in her position--that of a young person
  spending, in framed and wired confinement, the life of a guinea-pig or a
  magpie--she should know a great many persons without their recognising
  the acquaintance.  That made it an emotion the more lively--though
  singularly rare and always, even then, with opportunity still very much
  smothered--to see any one come in whom she knew outside, as she called
  it, any one who could add anything to the meanness of her function.  Her
  function was to sit there with two young men--the other telegraphist and
  the counter-clerk; to mind the "sounder," which was always going, to dole
  out stamps and postal-orders, weigh letters, answer stupid questions,
  give difficult change and, more than anything else, count words as
  numberless as the sands of the sea, the words of the telegrams thrust,
  from morning to night, through the gap left in the high lattice, across
  the encumbered shelf that her forearm ached with rubbing.  This
  transparent screen fenced out or fenced in, according to the side of the
  narrow counter on which the human lot was cast, the duskiest corner of a
  shop pervaded not a little, in winter, by the poison of perpetual gas,
  and at all times by the presence of hams, cheese, dried fish, soap,
  varnish, paraffin and other solids and fluids that she came to know
  perfectly by their smells without consenting to know them by their names.

  The barrier that divided the little post-and-telegraph-office from the
  grocery was a frail structure of wood and wire; but the social, the
  professional separation was a gulf that fortune, by a stroke quite
  remarkable, had spared her the necessity of contributing at all publicly
  to bridge.  When Mr. Cocker's young men stepped over from behind the
  other counter to change a five-pound note--and Mr. Cocker's situation,
  with the cream of the "Court Guide" and the dearest furnished apartments,
  Simpkin's, Ladle's, Thrupp's, just round the corner, was so select that
  his place was quite pervaded by the crisp rustle of these emblems--she
  pushed out the sovereigns as if the applicant were no more to her than
  one of the momentary, the practically featureless, appearances in the
  great procession; and this perhaps all the more from the very fact of the
  connexion (only recognised outside indeed) to which she had lent herself
  with ridiculous inconsequence.  She recognised the others the less
  because she had at last so unreservedly, so irredeemably, recognised Mr.
  Mudge.  However that might be, she was a little ashamed of having to
  admit to herself that Mr. Mudge's removal to a higher sphere--to a more
  commanding position, that is, though to a much lower neighbourhood--would
  have been described still better as a luxury than as the mere
  simplification, the corrected awkwardness, that she contented herself
  with calling it.  He had at any rate ceased to be all day long in her
  eyes, and this left something a little fresh for them to rest on of a
  Sunday.  During the three months of his happy survival at Cocker's after
  her consent to their engagement she had often asked herself what it was
  marriage would be able to add to a familiarity that seemed already to
  have scraped the platter so clean.  Opposite there, behind the counter of
  which his superior stature, his whiter apron, his more clustering curls
  and more present, too present, _h_'s had been for a couple of years the
  principal ornament, he had moved to and fro before her as on the small
  sanded floor of their contracted future.  She was conscious now of the
  improvement of not having to take her present and her future at once.
  They were about as much as she could manage when taken separate.

  She had, none the less, to give her mind steadily to what Mr. Mudge had
  again written her about, the idea of her applying for a transfer to an
  office quite similar--she couldn't yet hope for a place in a bigger--under
  the very roof where he was foreman, so that, dangled before her every
  minute of the day, he should see her, as he called it, "hourly," and in a
  part, the far N.W. district, where, with her mother, she would save on
  their two rooms alone nearly three shillings.  It would be far from
  dazzling to exchange Mayfair for Chalk Farm, and it wore upon her much
  that he could never drop a subject; still, it didn't wear as things _had_
  worn, the worries of the early times of their great misery, her own, her
  mother's and her elder sister's--the last of whom had succumbed to all
  but absolute want when, as conscious and incredulous ladies, suddenly
  bereft, betrayed, overwhelmed, they had slipped faster and faster down
  the steep slope at the bottom of which she alone had rebounded.  Her
  mother had never rebounded any more at the bottom than on the way; had
  only rumbled and grumbled down and down, making, in respect of caps,
  topics and "habits," no effort whatever--which simply meant smelling much
  of the time of whiskey.
  </div>

  <div v-if="author == 'Frank Norris'" id='text-FrankNorris' class='hide-me'>
  It was Sunday, and, according to his custom on that day, McTeague took
  his dinner at two in the afternoon at the car conductors' coffee-joint
  on Polk Street. He had a thick gray soup; heavy, underdone meat, very
  hot, on a cold plate; two kinds of vegetables; and a sort of suet
  pudding, full of strong butter and sugar. On his way back to his office,
  one block above, he stopped at Joe Frenna's saloon and bought a pitcher
  of steam beer. It was his habit to leave the pitcher there on his way to
  dinner.

  Once in his office, or, as he called it on his signboard, “Dental
  Parlors,” he took off his coat and shoes, unbuttoned his vest, and,
  having crammed his little stove full of coke, lay back in his operating
  chair at the bay window, reading the paper, drinking his beer, and
  smoking his huge porcelain pipe while his food digested; crop-full,
  stupid, and warm. By and by, gorged with steam beer, and overcome by the
  heat of the room, the cheap tobacco, and the effects of his heavy meal,
  he dropped off to sleep. Late in the afternoon his canary bird, in its
  gilt cage just over his head, began to sing. He woke slowly, finished
  the rest of his beer--very flat and stale by this time--and taking down
  his concertina from the bookcase, where in week days it kept the company
  of seven volumes of “Allen's Practical Dentist,” played upon it some
  half-dozen very mournful airs.

  McTeague looked forward to these Sunday afternoons as a period of
  relaxation and enjoyment. He invariably spent them in the same fashion.
  These were his only pleasures--to eat, to smoke, to sleep, and to play
  upon his concertina.

  The six lugubrious airs that he knew, always carried him back to the
  time when he was a car-boy at the Big Dipper Mine in Placer County, ten
  years before. He remembered the years he had spent there trundling the
  heavy cars of ore in and out of the tunnel under the direction of his
  father. For thirteen days of each fortnight his father was a steady,
  hard-working shift-boss of the mine. Every other Sunday he became an
  irresponsible animal, a beast, a brute, crazy with alcohol.

  McTeague remembered his mother, too, who, with the help of the Chinaman,
  cooked for forty miners. She was an overworked drudge, fiery and
  energetic for all that, filled with the one idea of having her son rise
  in life and enter a profession. The chance had come at last when the
  father died, corroded with alcohol, collapsing in a few hours. Two or
  three years later a travelling dentist visited the mine and put up his
  tent near the bunk-house. He was more or less of a charlatan, but he
  fired Mrs. McTeague's ambition, and young McTeague went away with him
  to learn his profession. He had learnt it after a fashion, mostly by
  watching the charlatan operate. He had read many of the necessary books,
  but he was too hopelessly stupid to get much benefit from them.

  Then one day at San Francisco had come the news of his mother's death;
  she had left him some money--not much, but enough to set him up in
  business; so he had cut loose from the charlatan and had opened his
  “Dental Parlors” on Polk Street, an “accommodation street” of small
  shops in the residence quarter of the town. Here he had slowly
  collected a clientele of butcher boys, shop girls, drug clerks, and car
  conductors. He made but few acquaintances. Polk Street called him the
  “Doctor” and spoke of his enormous strength. For McTeague was a young
  giant, carrying his huge shock of blond hair six feet three inches
  from the ground; moving his immense limbs, heavy with ropes of muscle,
  slowly, ponderously. His hands were enormous, red, and covered with a
  fell of stiff yellow hair; they were hard as wooden mallets, strong
  as vises, the hands of the old-time car-boy. Often he dispensed with
  forceps and extracted a refractory tooth with his thumb and finger.
  His head was square-cut, angular; the jaw salient, like that of the
  carnivora.

  McTeague's mind was as his body, heavy, slow to act, sluggish. Yet there
  was nothing vicious about the man. Altogether he suggested the draught
  horse, immensely strong, stupid, docile, obedient.

  When he opened his “Dental Parlors,” he felt that his life was a
  success, that he could hope for nothing better. In spite of the name,
  there was but one room. It was a corner room on the second floor over
  the branch post-office, and faced the street. McTeague made it do for
  a bedroom as well, sleeping on the big bed-lounge against the wall
  opposite the window. There was a washstand behind the screen in the
  corner where he manufactured his moulds. In the round bay window were
  his operating chair, his dental engine, and the movable rack on which
  he laid out his instruments. Three chairs, a bargain at the second-hand
  store, ranged themselves against the wall with military precision
  underneath a steel engraving of the court of Lorenzo de' Medici, which
  he had bought because there were a great many figures in it for the
  money. Over the bed-lounge hung a rifle manufacturer's advertisement
  calendar which he never used. The other ornaments were a small
  marble-topped centre table covered with back numbers of “The American
  System of Dentistry,” a stone pug dog sitting before the little stove,
  and a thermometer. A stand of shelves occupied one corner, filled with
  the seven volumes of “Allen's Practical Dentist.” On the top shelf
  McTeague kept his concertina and a bag of bird seed for the canary. The
  whole place exhaled a mingled odor of bedding, creosote, and ether.

  But for one thing, McTeague would have been perfectly contented. Just
  outside his window was his signboard--a modest affair--that read:
  “Doctor McTeague. Dental Parlors. Gas Given”; but that was all. It was
  his ambition, his dream, to have projecting from that corner window a
  huge gilded tooth, a molar with enormous prongs, something gorgeous and
  attractive. He would have it some day, on that he was resolved; but as
  yet such a thing was far beyond his means.

  When he had finished the last of his beer, McTeague slowly wiped his
  lips and huge yellow mustache with the side of his hand. Bull-like, he
  heaved himself laboriously up, and, going to the window, stood looking
  down into the street.

  The street never failed to interest him. It was one of those cross
  streets peculiar to Western cities, situated in the heart of the
  residence quarter, but occupied by small tradespeople who lived in the
  rooms above their shops. There were corner drug stores with huge jars
  of red, yellow, and green liquids in their windows, very brave and gay;
  stationers' stores, where illustrated weeklies were tacked upon bulletin
  boards; barber shops with cigar stands in their vestibules; sad-looking
  plumbers' offices; cheap restaurants, in whose windows one saw piles of
  unopened oysters weighted down by cubes of ice, and china pigs and cows
  knee deep in layers of white beans. At one end of the street McTeague
  could see the huge power-house of the cable line. Immediately opposite
  him was a great market; while farther on, over the chimney stacks of the
  intervening houses, the glass roof of some huge public baths glittered
  like crystal in the afternoon sun. Underneath him the branch post-office
  was opening its doors, as was its custom between two and three
  o'clock on Sunday afternoons. An acrid odor of ink rose upward to him.
  Occasionally a cable car passed, trundling heavily, with a strident
  whirring of jostled glass windows.

  On week days the street was very lively. It woke to its work about seven
  o'clock, at the time when the newsboys made their appearance together
  with the day laborers. The laborers went trudging past in a straggling
  file--plumbers' apprentices, their pockets stuffed with sections of
  lead pipe, tweezers, and pliers; carpenters, carrying nothing but their
  little pasteboard lunch baskets painted to imitate leather; gangs of
  street workers, their overalls soiled with yellow clay, their picks and
  long-handled shovels over their shoulders; plasterers, spotted with lime
  from head to foot. This little army of workers, tramping steadily in
  one direction, met and mingled with other toilers of a different
  description--conductors and “swing men” of the cable company going on
  duty; heavy-eyed night clerks from the drug stores on their way home to
  sleep; roundsmen returning to the precinct police station to make their
  night report, and Chinese market gardeners teetering past under their
  heavy baskets. The cable cars began to fill up; all along the street
  could be seen the shopkeepers taking down their shutters.

  Between seven and eight the street breakfasted. Now and then a waiter
  from one of the cheap restaurants crossed from one sidewalk to the
  other, balancing on one palm a tray covered with a napkin. Everywhere
  was the smell of coffee and of frying steaks. A little later, following
  in the path of the day laborers, came the clerks and shop girls,
  dressed with a certain cheap smartness, always in a hurry, glancing
  apprehensively at the power-house clock. Their employers followed
  an hour or so later--on the cable cars for the most part whiskered
  gentlemen with huge stomachs, reading the morning papers with great
  gravity; bank cashiers and insurance clerks with flowers in their
  buttonholes.

  At the same time the school children invaded the street, filling the air
  with a clamor of shrill voices, stopping at the stationers' shops, or
  idling a moment in the doorways of the candy stores. For over half an
  hour they held possession of the sidewalks, then suddenly disappeared,
  leaving behind one or two stragglers who hurried along with great
  strides of their little thin legs, very anxious and preoccupied.

  Towards eleven o'clock the ladies from the great avenue a block above
  Polk Street made their appearance, promenading the sidewalks leisurely,
  deliberately. They were at their morning's marketing. They were handsome
  women, beautifully dressed. They knew by name their butchers and grocers
  and vegetable men. From his window McTeague saw them in front of the
  stalls, gloved and veiled and daintily shod, the subservient provision
  men at their elbows, scribbling hastily in the order books. They all
  seemed to know one another, these grand ladies from the fashionable
  avenue. Meetings took place here and there; a conversation was begun;
  others arrived; groups were formed; little impromptu receptions were
  held before the chopping blocks of butchers' stalls, or on the sidewalk,
  around boxes of berries and fruit.

  From noon to evening the population of the street was of a mixed
  character. The street was busiest at that time; a vast and prolonged
  murmur arose--the mingled shuffling of feet, the rattle of wheels, the
  heavy trundling of cable cars. At four o'clock the school children
  once more swarmed the sidewalks, again disappearing with surprising
  suddenness. At six the great homeward march commenced; the cars were
  crowded, the laborers thronged the sidewalks, the newsboys chanted the
  evening papers. Then all at once the street fell quiet; hardly a soul
  was in sight; the sidewalks were deserted. It was supper hour. Evening
  began; and one by one a multitude of lights, from the demoniac glare of
  the druggists' windows to the dazzling blue whiteness of the electric
  globes, grew thick from street corner to street corner. Once more the
  street was crowded. Now there was no thought but for amusement. The
  cable cars were loaded with theatre-goers--men in high hats and
  young girls in furred opera cloaks. On the sidewalks were groups and
  couples--the plumbers' apprentices, the girls of the ribbon counters,
  the little families that lived on the second stories over their shops,
  the dressmakers, the small doctors, the harness-makers--all the various
  inhabitants of the street were abroad, strolling idly from shop window
  to shop window, taking the air after the day's work. Groups of girls
  collected on the corners, talking and laughing very loud, making remarks
  upon the young men that passed them. The tamale men appeared. A band of
  Salvationists began to sing before a saloon.

  Then, little by little, Polk Street dropped back to solitude. Eleven
  o'clock struck from the power-house clock. Lights were extinguished. At
  one o'clock the cable stopped, leaving an abrupt silence in the air.
  All at once it seemed very still. The ugly noises were the occasional
  footfalls of a policeman and the persistent calling of ducks and geese
  in the closed market. The street was asleep.

  Day after day, McTeague saw the same panorama unroll itself. The bay
  window of his “Dental Parlors” was for him a point of vantage from which
  he watched the world go past.

  On Sundays, however, all was changed. As he stood in the bay window,
  after finishing his beer, wiping his lips, and looking out into the
  street, McTeague was conscious of the difference. Nearly all the stores
  were closed. No wagons passed. A few people hurried up and down the
  sidewalks, dressed in cheap Sunday finery. A cable car went by; on the
  outside seats were a party of returning picnickers. The mother, the
  father, a young man, and a young girl, and three children. The two older
  people held empty lunch baskets in their laps, while the bands of the
  children's hats were stuck full of oak leaves. The girl carried a huge
  bunch of wilting poppies and wild flowers.

  As the car approached McTeague's window the young man got up and swung
  himself off the platform, waving goodby to the party. Suddenly McTeague
  recognized him.

  “There's Marcus Schouler,” he muttered behind his mustache.

  Marcus Schouler was the dentist's one intimate friend. The acquaintance
  had begun at the car conductors' coffee-joint, where the two occupied
  the same table and met at every meal. Then they made the discovery that
  they both lived in the same flat, Marcus occupying a room on the floor
  above McTeague. On different occasions McTeague had treated Marcus for
  an ulcerated tooth and had refused to accept payment. Soon it came to be
  an understood thing between them. They were “pals.”

  McTeague, listening, heard Marcus go up-stairs to his room above. In a
  few minutes his door opened again. McTeague knew that he had come out
  into the hall and was leaning over the banisters.

  “Oh, Mac!” he called. McTeague came to his door.

  “Hullo! 'sthat you, Mark?”

  “Sure,” answered Marcus. “Come on up.”

  “You come on down.”

  “No, come on up.”

  “Oh, you come on down.”

  “Oh, you lazy duck!” retorted Marcus, coming down the stairs.

  “Been out to the Cliff House on a picnic,” he explained as he sat down
  on the bed-lounge, “with my uncle and his people--the Sieppes, you know.
  By damn! it was hot,” he suddenly vociferated. “Just look at that! Just
  look at that!” he cried, dragging at his limp collar. “That's the third
  one since morning; it is--it is, for a fact--and you got your stove
  going.” He began to tell about the picnic, talking very loud and fast,
  gesturing furiously, very excited over trivial details. Marcus could not
  talk without getting excited.

  “You ought t'have seen, y'ought t'have seen. I tell you, it was outa
  sight. It was; it was, for a fact.”

  “Yes, yes,” answered McTeague, bewildered, trying to follow. “Yes,
  that's so.”

  In recounting a certain dispute with an awkward bicyclist, in which it
  appeared he had become involved, Marcus quivered with rage. “'Say that
  again,' says I to um. 'Just say that once more, and'”--here a rolling
  explosion of oaths--“'you'll go back to the city in the Morgue wagon.
  Ain't I got a right to cross a street even, I'd like to know, without
  being run down--what?' I say it's outrageous. I'd a knifed him in
  another minute. It was an outrage. I say it was an outrage.”

  “Sure it was,” McTeague hastened to reply. “Sure, sure.”

  “Oh, and we had an accident,” shouted the other, suddenly off on another
  tack. “It was awful. Trina was in the swing there--that's my cousin
  Trina, you know who I mean--and she fell out. By damn! I thought she'd
  killed herself; struck her face on a rock and knocked out a front tooth.
  It's a wonder she didn't kill herself. It IS a wonder; it is, for a
  fact. Ain't it, now? Huh? Ain't it? Y'ought t'have seen.”

  McTeague had a vague idea that Marcus Schouler was stuck on his cousin
  Trina. They “kept company” a good deal; Marcus took dinner with the
  Sieppes every Saturday evening at their home at B Street station, across
  the bay, and Sunday afternoons he and the family usually made little
  excursions into the suburbs. McTeague began to wonder dimly how it
  was that on this occasion Marcus had not gone home with his cousin. As
  sometimes happens, Marcus furnished the explanation upon the instant.

  “I promised a duck up here on the avenue I'd call for his dog at four
  this afternoon.”

  Marcus was Old Grannis's assistant in a little dog hospital that the
  latter had opened in a sort of alley just off Polk Street, some four
  blocks above Old Grannis lived in one of the back rooms of McTeague's
  flat. He was an Englishman and an expert dog surgeon, but Marcus
  Schouler was a bungler in the profession. His father had been a
  veterinary surgeon who had kept a livery stable near by, on California
  Street, and Marcus's knowledge of the diseases of domestic animals had
  been picked up in a haphazard way, much after the manner of McTeague's
  education. Somehow he managed to impress Old Grannis, a gentle,
  simple-minded old man, with a sense of his fitness, bewildering him with
  a torrent of empty phrases that he delivered with fierce gestures and
  with a manner of the greatest conviction.

  “You'd better come along with me, Mac,” observed Marcus. “We'll get the
  duck's dog, and then we'll take a little walk, huh? You got nothun to
  do. Come along.”

  McTeague went out with him, and the two friends proceeded up to the
  avenue to the house where the dog was to be found. It was a huge
  mansion-like place, set in an enormous garden that occupied a whole
  third of the block; and while Marcus tramped up the front steps and rang
  the doorbell boldly, to show his independence, McTeague remained below
  on the sidewalk, gazing stupidly at the curtained windows, the marble
  steps, and the bronze griffins, troubled and a little confused by all
  this massive luxury.

  After they had taken the dog to the hospital and had left him to whimper
  behind the wire netting, they returned to Polk Street and had a glass of
  beer in the back room of Joe Frenna's corner grocery.

  Ever since they had left the huge mansion on the avenue, Marcus had been
  attacking the capitalists, a class which he pretended to execrate. It
  was a pose which he often assumed, certain of impressing the dentist.
  Marcus had picked up a few half-truths of political economy--it was
  impossible to say where--and as soon as the two had settled themselves
  to their beer in Frenna's back room he took up the theme of the labor
  question. He discussed it at the top of his voice, vociferating, shaking
  his fists, exciting himself with his own noise. He was continually
  making use of the stock phrases of the professional politician--phrases
  he had caught at some of the ward “rallies” and “ratification meetings.”
   These rolled off his tongue with incredible emphasis, appearing at every
  turn of his conversation--“Outraged constituencies,” “cause of labor,”
   “wage earners,” “opinions biased by personal interests,” “eyes blinded
  by party prejudice.” McTeague listened to him, awestruck.

  “There's where the evil lies,” Marcus would cry. “The masses must learn
  self-control; it stands to reason. Look at the figures, look at the
  figures. Decrease the number of wage earners and you increase wages,
  don't you? don't you?”

  Absolutely stupid, and understanding never a word, McTeague would
  answer:

  “Yes, yes, that's it--self-control--that's the word.”

  “It's the capitalists that's ruining the cause of labor,” shouted
  Marcus, banging the table with his fist till the beer glasses danced;
  “white-livered drones, traitors, with their livers white as snow, eatun
  the bread of widows and orphuns; there's where the evil lies.”

  Stupefied with his clamor, McTeague answered, wagging his head:

  “Yes, that's it; I think it's their livers.”

  Suddenly Marcus fell calm again, forgetting his pose all in an instant.

  “Say, Mac, I told my cousin Trina to come round and see you about that
  tooth of hers. She'll be in to-morrow, I guess.”
  </div>

  <div v-if="author == 'Gertrude Stein'" id='text-GertrudeStein' class='hide-me'>
    In the inside there is sleeping, in the outside there is reddening, in
the morning there is meaning, in the evening there is feeling. In the
evening there is feeling. In feeling anything is resting, in feeling
anything is mounting, in feeling there is resignation, in feeling there
is recognition, in feeling there is recurrence and entirely mistaken
there is pinching. All the standards have steamers and all the curtains
have bed linen and all the yellow has discrimination and all the circle
has circling. This makes sand.

Very well. Certainly the length is thinner and the rest, the round rest
has a longer summer. To shine, why not shine, to shine, to station, to
enlarge, to hurry the measure all this means nothing if there is
singing, if there is singing then there is the resumption.

The change the dirt, not to change dirt means that there is no beefsteak
and not to have that is no obstruction, it is so easy to exchange
meaning, it is so easy to see the difference. The difference is that a
plain resource is not entangled with thickness and it does not mean that
thickness shows such cutting, it does mean that a meadow is useful and a
cow absurd. It does not mean that there are tears, it does not mean that
exudation is cumbersome, it means no more than a memory, a choice and a
reëstablishment, it means more than any escape from a surrounding extra.
All the time that there is use there is use and any time there is a
surface there is a surface, and every time there is an exception there
is an exception and every time there is a division there is a dividing.
Any time there is a surface there is a surface and every time there is a
suggestion there is a suggestion and every time there is silence there
is silence and every time that is languid there is that there then and
not oftener, not always, not particular, tender and changing and
external and central and surrounded and singular and simple and the same
and the surface and the circle and the shine and the succor and the
white and the same and the better and the red and the same and the
centre and the yellow and the tender and the better, and altogether.

Considering the circumstances there is no occasion for a reduction,
considering that there is no pealing there is no occasion for an
obligation, considering that there is no outrage there is no necessity
for any reparation, considering that there is no particle sodden there
is no occasion for deliberation. Considering everything and which way
the turn is tending, considering everything why is there no restraint,
considering everything what makes the place settle and the plate
distinguish some specialties. The whole thing is not understood and this
is not strange considering that there is no education, this is not
strange because having that certainly does show the difference in
cutting, it shows that when there is turning there is no distress.

In kind, in a control, in a period, in the alteration of pigeons, in
kind cuts and thick and thin spaces, in kind ham and different colors,
the length of leaning a strong thing outside not to make a sound but to
suggest a crust, the principal taste is when there is a whole chance to
be reasonable, this does not mean that there is overtaking, this means
nothing precious, this means clearly that the chance to exercise is a
social success. So then the sound is not obtrusive. Suppose it is
obtrusive suppose it is. What is certainly the desertion is not a
reduced description, a description is not a birthday.

Lovely snipe and tender turn, excellent vapor and slender butter, all
the splinter and the trunk, all the poisonous darkening drunk, all the
joy in weak success, all the joyful tenderness, all the section and the
tea, all the stouter symmetry.

Around the size that is small, inside the stern that is the middle,
besides the remains that are praying, inside the between that is
turning, all the region is measuring and melting is exaggerating.

Rectangular ribbon does not mean that there is no eruption it means that
if there is no place to hold there is no place to spread. Kindness is
not earnest, it is not assiduous it is not revered.

Room to comb chickens and feathers and ripe purple, room to curve single
plates and large sets and second silver, room to send everything away,
room to save heat and distemper, room to search a light that is simpler,
all room has no shadow.

There is no use there is no use at all in smell, in taste, in teeth, in
toast, in anything, there is no use at all and the respect is mutual.

Why should that which is uneven, that which is resumed, that which is
tolerable why should all this resemble a smell, a thing is there, it
whistles, it is not narrower, why is there no obligation to stay away
and yet courage, courage is everywhere and the best remains to stay.

If there could be that which is contained in that which is felt there
would be a chair where there are chairs and there would be no more
denial about a clatter. A clatter is not a smell. All this is good.

The Saturday evening which is Sunday is every week day. What choice is
there when there is a difference. A regulation is not active.
Thirstiness is not equal division.

Anyway, to be older and ageder is not a surfeit nor a suction, it is not
dated and careful, it is not dirty. Any little thing is clean, rubbing
is black. Why should ancient lambs be goats and young colts and never
beef, why should they, they should because there is so much difference
in age.

A sound, a whole sound is not separation, a whole sound is in an order.

Suppose there is a pigeon, suppose there is.

Looseness, why is there a shadow in a kitchen, there is a shadow in a
kitchen because every little thing is bigger.

The time when there are four choices and there are four choices in a
difference, the time when there are four choices there is a kind and
there is a kind. There is a kind. There is a kind. Supposing there is a
bone, there is a bone. Supposing there are bones. There are bones. When
there are bones there is no supposing there are bones. There are bones
and there is that consuming. The kindly way to feel separating is to
have a space between. This shows a likeness.

Hope in gates, hope in spoons, hope in doors, hope in tables, no hope in
daintiness and determination. Hope in dates.

Tin is not a can and a stove is hardly. Tin is not necessary and neither
is a stretcher. Tin is never narrow and thick.

Color is in coal. Coal is outlasting roasting and a spoonful, a whole
spoon that is full is not spilling. Coal any coal is copper.

Claiming nothing, not claiming anything, not a claim in everything,
collecting claiming, all this makes a harmony, it even makes a
succession.

Sincerely gracious one morning, sincerely graciously trembling, sincere
in gracious eloping, all this makes a furnace and a blanket. All this
shows quantity.

Like an eye, not so much more, not any searching, no compliments.

Please be the beef, please beef, pleasure is not wailing. Please beef,
please be carved clear, please be a case of consideration.

Search a neglect. A sale, any greatness is a stall and there is no
memory, there is no clear collection.

A satin sight, what is a trick, no trick is mountainous and the color,
all the rush is in the blood.

Bargaining for a little, bargain for a touch, a liberty, an
estrangement, a characteristic turkey.

Please spice, please no name, place a whole weight, sink into a standard
rising, raise a circle, choose a right around, make the resonance
accounted and gather green any collar.

To bury a slender chicken, to raise an old feather, to surround a
garland and to bake a pole splinter, to suggest a repose and to settle
simply, to surrender one another, to succeed saving simpler, to satisfy
a singularity and not to be blinder, to sugar nothing darker and to read
redder, to have the color better, to sort out dinner, to remain
together, to surprise no sinner, to curve nothing sweeter, to continue
thinner, to increase in resting recreation to design string not dimmer.

Cloudiness what is cloudiness, is it a lining, is it a roll, is it
melting.

The sooner there is jerking, the sooner freshness is tender, the sooner
the round it is not round the sooner it is withdrawn in cutting, the
sooner the measure means service, the sooner there is chinking, the
sooner there is sadder than salad, the sooner there is none do her, the
sooner there is no choice, the sooner there is a gloom freer, the same
sooner and more sooner, this is no error in hurry and in pressure and in
opposition to consideration.

A recital, what is a recital, it is an organ and use does not strengthen
valor, it soothes medicine.

A transfer, a large transfer, a little transfer, some transfer, clouds
and tracks do transfer, a transfer is not neglected.

Pride, when is there perfect pretence, there is no more than yesterday
and ordinary.

A sentence of a vagueness that is violence is authority and a mission
and stumbling and also certainly also a prison. Calmness, calm is beside
the plate and in way in. There is no turn in terror. There is no volume
in sound.

There is coagulation in cold and there is none in prudence. Something
is preserved and the evening is long and the colder spring has sudden
shadows in a sun. All the stain is tender and lilacs really lilacs are
disturbed. Why is the perfect reëstablishment practiced and prized, why
is it composed. The result the pure result is juice and size and baking
and exhibition and nonchalance and sacrifice and volume and a section in
division and the surrounding recognition and horticulture and no murmur.
This is a result. There is no superposition and circumstance, there is
hardness and a reason and the rest and remainder. There is no delight
and no mathematics.
  </div>

  <div v-if="status == 2" id='model-result'>
    <div class='row'>
      <div class='col' id='result-text'>
        {{ generatedText }}
      </div>
    </div>
    <div class='row'>
      <div class='col-sm-4'>
        <button type='button' class='btn btn-dark mr-2' v-on:click='saveAsFile'>Save Generated Text</button>
      </div>
      <div class='col'>
        <span id='save-link'></span>
      </div>
    </div>
  </div>

</div>
</template>

<style scoped>

  input[type='number'] {
    max-width: 65px;
  }

  .hide-me {
    display: none;
    font-size: 0.1rem;
  }

</style>

<script>

  const STATUS_WAITING = 0, STATUS_BLENDING = 1, STATUS_DONE = 2, STATUS_ERROR = -1

  const useUpperCase = function(wordList) {
    let tmpList = Object.keys(wordList).filter(function(word) {
      return word[0] >= 'A' && word[0] <= 'Z'
    })
    return tmpList[~~(Math.random()*tmpList.length)]
  }

  export default {
    name: 'MarkovModel',
    props: {
      author: String,
      inputText: String
    },
    data() {
      return {
        blendedMarkov: null,
        generatedText: "",
        num_sentences: 5,
        status: STATUS_WAITING
      }
    },
    methods: {
      makeAuthorChain: function() {
        this.status = STATUS_BLENDING
        const MarkovChain = this.$markovchain

        let id = 'text-' + this.author.replace(/\s/g, '')
        let text = document.getElementById(id).innerHTML
        let authorMarkov = new MarkovChain(text)
        this.blendedMarkov = authorMarkov.parse(this.inputText)
        this.generate()
      },
      generate: function() {
        let sentences = ""
        for (let i = 0; i < this.num_sentences; i++) {
          sentences += this.blendedMarkov.start(useUpperCase).end().process() + ". "
        }
        //if regenerating, get rid of text file
        if (this.generatedText != "")
          document.getElementById('save-link').innerHTML = ""

        this.generatedText = sentences
        this.status = STATUS_DONE
      },
      saveAsFile: function() {
        let target = document.getElementById('save-link')
        let link = document.createElement('a')
        let title = this.author + "_Blend.txt"
        let signature = "\n\n=========================\nGenerated by StyleBlender"
        try {
          let newfile = new File([this.generatedText, signature], title, {type: 'text/plain'})
          link.href = URL.createObjectURL(newfile)
        }
        catch(error) {
          target.innerHTML = 'An error occurred'
          //console.log(error)
          return
        }
        link.download = title
        link.innerHTML = title
        target.appendChild(link)
      }
    }
  }

</script>
