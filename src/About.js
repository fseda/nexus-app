import React from 'react';
import Beatriz from './fotos_nossas/beatriz.jpeg'; 
import Emilly from './fotos_nossas/emilly.jpeg';
import Isabella from './fotos_nossas/isabella.jpeg'; // Correct the extension if it's a typo
import Felipe from './fotos_nossas/felipe.jpeg';
import Victor from './fotos_nossas/victor.jpeg';

const About = () => {
  return (
    <div>
    <header style={{ backgroundColor: '#0077cc', padding: '20px', textAlign: 'center' }}>
  <h1 style={{ color: '#FFFFFF' }}>Sobre os Desenvolvedores</h1>
  <p style={{ color: '#FFFFFF' }}>Esta é a página sobre a nossa aplicação.</p>
</header>

      {/* Section for Beatriz */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '20px', marginLeft: '130px'}}>
        <img src={Beatriz} alt="Beatriz" style={{ width: '190px', marginRight: '20px' }} />
        <div>
          <h2>Beatriz Babinski</h2>
          <h3>Ciência de Dados e Inteligência Artificial</h3>
        </div>
      </div>

      {/* Section for Emilly */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '20px', marginLeft: '130px'}}>
        <img src={Emilly} alt="Emilly" style={{ width: '190px', marginRight: '20px' }} />
        <div>
          <h2>Emilly Fernandes</h2>
          <h3>Ciência de Dados e Inteligência Artificial</h3>
        </div>
      </div>

      {/* Section for Isabella */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '20px', marginLeft: '130px'}}>
        <img src={Isabella} alt="Isabella" style={{ width: '190px', marginRight: '20px' }} />
        <div>
          <h2>Isabella Vieira</h2>
          <h3>Ciência de Dados e Inteligência Artificial</h3>
          
        </div>
      </div>

      {/* Section for Felipe */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '20px', marginLeft: '130px'}}>
        <img src={Felipe} alt="Felipe" style={{ width: '190px', marginRight: '20px' }} />
        <div>
          <h2>Felipe Seda</h2>
          <h3>Engenharia da computação</h3>
          
        </div>
      </div>

      {/* Section for Victor */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', padding: '20px', marginLeft: '130px'}}>
        <img src={Victor} alt="Victor" style={{ width: '190px', marginRight: '20px' }} />
        <div>
          <h2>Victor Furtado</h2>
          <h3>Engenharia da computação</h3>
          
        </div>
      </div>

    </div>
  );
}

export default About;
