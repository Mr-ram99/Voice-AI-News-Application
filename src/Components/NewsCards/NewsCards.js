import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './style.js';
const infoCards =[
    { color: '#815d7d', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#574374', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Business news' },
  { color: '#05496e', title: 'News by Terms', info: 'Bitcoin, Crypto Currency, Smartphones, Apple...', text: 'What\'s up with bitcoin or tell me about bitcoin' },
  { color: '#706a4c', title: 'News by Sources', info: 'Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Show me the news from BBC News' },
];
const NewsCards = ({articles, activeArticle}) =>{

    const classes = useStyles();

    if(!articles.length)
    {
        return (
        <Grid in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {infoCards.map((infoCard)=>(
               <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                   <div className={classes.card} style={{backgroundColor:infoCard.color}}>
                       <Typography varient="h5" component="h5">{infoCard.title}</Typography>
                       {infoCard.info ?  <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                        <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                   </div>
                </Grid>
            ))}

            </Grid>
        </Grid>
        );
    }

    return (
        <Grid in>
            <Grid className={classes.container} container alignItems='stretch' spacing={2}>
            {articles.map((article, i)=>(
               <Grid item xs={12} sm={6} md={4} lg={3} style={{dispaly:'flex'}}>
                   <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                </Grid>
            ))}

            </Grid>
        </Grid>
    )
}

export default NewsCards;