import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { Articles } from '../../components/screens/Articles/Articles';
import { Article } from '../../components/ui/Article';

describe(`<${Articles.name} />`, () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
          writable: true,
          value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
          }))
        });
      });
  it(`should render without exploding`, () => {
      const article = {
        id: 789702, 
        date: '2. februar 2019', 
        image: 'https://placeimg.com/280/180/nature', 
        category: 'sport', 
        title: 'Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender', 
        preamble: 'MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.' 
      }
    const { container } = render(<Article 
        title={article.title}
        src={article.image}
        preamble={article.preamble}
        date={article.date}
    />);
    expect(container).toBeInTheDocument();
  });
});
