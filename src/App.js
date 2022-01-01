import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import useStyles from './style.js';
import NewsCards from './Components/NewsCards/NewsCards';
import {Typography } from '@material-ui/core';
import logo from './voiceAi.jpg';
import wordsToNumbers from 'words-to-numbers';
const AlanKey = '4e136af128830bf876475fef4d6617012e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const classes = useStyles();
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect(() => {
        alanBtn({
            key: AlanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1);
                }
                else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if(command === 'open'){
                    const parsedNumber = number.length >2 ? wordsToNumbers(number,{path:false}):number;
                    if(parsedNumber>20)
                    {
                        alanBtn().playText('Please try again.');
                    }
                    else{
                        window.open(articles[parsedNumber-1].url,'_blank');
                        alanBtn().playText('Opening ... ');
                    }
                }
            }

        });
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                {newsArticles.length ? (
                    <div className={classes.infoContainer}>
                        <div className={classes.card}><Typography variant="h5" component="h3">Try saying: <br /><br />Open article number [4]</Typography></div>
                        <div className={classes.card}><Typography variant="h5" component="h3">Try saying: <br /><br />Go back</Typography></div>
                    </div>
                ) : null}
                <img src={logo} className={classes.logo} alt="logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
            {!newsArticles.length ? (
                <div className={classes.footer}>
                    <Typography variant="body1" component="h2">
                        Created by
                        <a className={classes.link} href="https://github.com/Mr-ram99"> - Jabra Ram</a>
                    </Typography>
                </div>
            ) : null}
        </div>
    )

}
export default App;