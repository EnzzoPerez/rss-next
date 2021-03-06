import React, { Component } from 'react';
import { extractDescription, extractImage } from "../utils/utils";

import { Badge, Card, CardBody, Button, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';


export default class NewsCategories extends Component {
    render() {
        const {news} = this.props
        return (
            news.items.map(({title, link, description, thumbnail, enclosure, pubDate}, index)=>{
                let shortDescription = extractDescription(description)
                let date = new Date(pubDate)
                let dateNow = date.toLocaleDateString()
                let time = date.toLocaleTimeString()
                return (
                    <div className="newsEsquiu" key={index}>
                        <Card className="itemNews mb-3" href={link}>
                            {thumbnail === ''?
                            <CardImg width="10%" src={enclosure.link}/>
                            :<CardImg width="10%" src={thumbnail}/>
                            }
                            <CardBody>
                                <CardTitle>
                                    <h2>
                                        <a 
                                            target='_blank' 
                                            rel='nofollow noreferrer noopener' 
                                            href={ link }>
                                                { title }
                                        </a>
                                    </h2>
                                </CardTitle>
                                <CardText><div dangerouslySetInnerHTML={{__html: `${shortDescription}`}}/></CardText>
                                <CardText>
                                    <small className="text-muted">
                                        <div className="detailsNews">
                                            { dateNow } - {time}
                                        </div>
                                    </small>
                                </CardText>
                            </CardBody>
                        </Card>
                            

                        <style jsx>{`
                            h2 {
                                font-size: 1.1em;
                                font-family: 'Roboto';
                                font-weight: 400;
                                margin: 0;
                                margin-bottom: 0.5em;
                            }
                            h2 a {
                                color: #333;
                                font-family: 'Roboto';
                                font-size: 2rem;
                            }
                            h2 a:hover {
                                text-decoration: underline;
                            }
                            .detailsNews {
                                font-size: 0.9em;
                                font-weight: bold;
                            }
                            .detailsNews strong {
                                margin-right: 1em;
                            }
                            .detailsNews a {
                                color: #ff6600;
                                text-decoration: none;
                            }
                        `}</style>
                    </div>
                )
            })
        )
    }
};