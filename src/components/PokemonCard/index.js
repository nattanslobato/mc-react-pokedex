import { CardContainer, CardInfo, Container, Code, Name, CardImage, Photo } from './styles';

function PokemonCard(){
    return (
        <div>
            <Container>
                <CardContainer>
                    <CardInfo>
                        <Code>#1</Code>
                        <Name>Bulbusaur</Name>
                    </CardInfo>
                </CardContainer>
                <CardImage>
                    <Photo src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}/>
                </CardImage>
            </Container>
        </div>
        );
}

export default PokemonCard;