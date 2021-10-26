import React from 'react';
import 'bulma/css/bulma.min.css'
import { Footer, Hero, Container, Content } from 'react-bulma-components'


class PracticeFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      inventoryList: []
      };
  }


    render() { 
    return (
    <div>
      <Hero size="fullheight">
        <Hero.Head renderAs="header" />
        <Hero.Body>
          <p>
            Lorem ipsum
            <sup>
              <a>[1]</a>
            </sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus
            ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh
            eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat
            vel, interdum mattis neque. Sub<sub>script</sub> works as well!
          </p>
        </Hero.Body>
        <Hero.Footer>
          <Footer>
            <Container>
              <Content style={{ textAlign: 'center' }}>
                <p>
                  <strong>Bulma</strong> by{' '}
                  <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is
                  licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
                  website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                  </a>.
                </p>
              </Content>
            </Container>
          </Footer>
        </Hero.Footer>
      </Hero>
    </div>
      )
    }

}

export default PracticeFooter;





