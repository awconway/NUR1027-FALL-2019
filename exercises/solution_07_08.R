suppressMessages(library(nur1027functions))
SD  <- mean(sd(iccdata$T1),sd(iccdata$T2),sd(iccdata$T3))
icc <- 0.74
round(SD*sqrt(1-icc), 2)