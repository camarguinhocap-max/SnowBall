'use client';

import { AlertCircle } from 'lucide-react';

export default function InvestmentDisclaimer() {
  return (
    <div style={{
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      border: '1px solid rgba(251, 191, 36, 0.3)',
      borderRadius: '8px',
      padding: '1rem',
      marginTop: '2rem',
      marginBottom: '2rem',
      display: 'flex',
      gap: '1rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        color: '#d97706',
        minWidth: '24px'
      }}>
        <AlertCircle size={24} />
      </div>
      <div style={{
        fontSize: '0.95rem',
        color: 'var(--foreground)',
        lineHeight: 1.6
      }}>
        <strong>Aviso Importante:</strong> Este artigo é fornecido apenas para fins educacionais e informativos. 
        <strong> Não constitui recomendação de investimento ou aconselhamento financeiro profissional.</strong>
        <br />
        <br />
        <strong>Disclaimer Completo:</strong>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>O conteúdo não é recomendação para compra, venda ou retenção de valores mobiliários.</li>
          <li>Investimentos em renda variável (ações, cripto, etc) envolvem risco de perda total do capital.</li>
          <li>Resultados passados não garantem resultados futuros.</li>
          <li>Consulte um profissional qualificado (CPA, CFP) antes de tomar decisões de investimento.</li>
          <li>A DividAI não é responsável por perdas ou consequências de decisões tomadas com base neste conteúdo.</li>
        </ul>
        <br />
        Para recomendações investimento personalizadas, procure um assessor de investimentos credenciado pela CVM.
      </div>
    </div>
  );
}
