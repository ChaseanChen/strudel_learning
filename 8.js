
setcps(1);

stack(

  note("f5 f5 [d5 c5 d5 f5] a5 a5*1.5 a4*0.5 | [[a4 g4 g4 g4] [g4 f4 a4 a4]] g4*2 | f5 f5 [d5 c5 d5 f5] a5 a5*1.5 a4*0.5 | [[a4 g4 g4 a4] [a4 g4 a4 g4]] f4*2")
    .s("piano")
    .velocity(0.6)
    .gain(1)
    .room(0.8)
    .delay(0.4)
    .delayfb(0.2)
    .slow(8)
    ._scope()
);