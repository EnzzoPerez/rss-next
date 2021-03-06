import React, { Component } from 'react';
import { Row, Col, Card, CardTitle, CardText, CardDeck, CardBody, CardImg, CardImgOverlay } from 'reactstrap';
import Link from "next/link";
import Layout from "../components/layout";

const papers = [
	{name: 'El esquiu', url:'/journal'},
	{name: 'El Ancasti', url:'/journal'},
	{name: 'Catamarca Actual', url:'/journal'},
	{name: 'Clarin', url:'/journal'}
]

const JournalComponent = (props) => {
	const {name, url} = props
	return (
		<Card>
			<CardBody>
				<CardTitle>
					<Link href={`${url}?name=${name}`} width="50%">
						<a>{name}</a>
					</Link>
				</CardTitle>
			</CardBody>

			<style jsx>{`
				a { 
					font-family: Roboto;
					font-size: 2rem;
					color: black;
				}
			`}</style>
		</Card>
	)
};

export default class ListPapers extends Component {
	render() {
		return (
			<Layout>
				<Row>	
					{papers.map((item, index)=>(
						<Col class="mx-auto my-4">
							<JournalComponent key={index} name={item.name} url={item.url}/>
						</Col>
					))}
				</Row>
			</Layout>
		)
	}
};
