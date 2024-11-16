
// src/componentes/Main.jsx
import React, { useEffect, useState } from "react";
import hello from "../../assets/hello.png";
import Card from "../cards/Card";
import ChartSection from "../charts/ChartSection";
import "./Main.css";

const Main = () => {
  // Estado para armazenar os dados do backend
  const [dashboardData, setDashboardData] = useState(null);

  // Simulação de fetch para obter dados do backend
  useEffect(() => {
    // Aqui você pode substituir pelo fetch da sua API
    const fetchData = async () => {
      const data = {
        greeting: "Olá Asaph",
        cards: [
          { iconClass: "fa fa-file-text", title: "Análise de pedidos", value: 578, colorClass: "text-lightblue" },
          { iconClass: "fa fa-money-bills", title: "Pagamentos", value: "R$2.467", colorClass: "text-red" },
          { iconClass: "fa fa-gift", title: "Premiações", value: "R$2.467", colorClass: "text-yellow" },
          { iconClass: "fa fa-bars", title: "Categorias", value: 40, colorClass: "text-green" },
        ],
        reports: [
          { title: "Lucro", value: "R$2500" },
          { title: "Pagamentos", value: "R$250" },
          { title: "Custos de Hospedagem", value: "R$150" },
          { title: "Banco de dados", value: "R$180" },
        ],
      };
      setDashboardData(data);
    };
    fetchData();
  }, []);

  // Renderizando condicionalmente apenas após os dados estarem disponíveis
  if (!dashboardData) return <p>Carregando...</p>;

  return (
    <main>
      <div className="main__container">
        {/* Saudações */}
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>{dashboardData.greeting}</h1>
            <p>Bem-vindo ao seu painel</p>
          </div>
        </div>

        {/* Cartões Dinâmicos */}
        <div className="main__cards">
          {dashboardData.cards.map((card, index) => (
            <Card
              key={index}
              iconClass={card.iconClass}
              title={card.title}
              value={card.value}
              colorClass={card.colorClass}
            />
          ))}
        </div>

        {/* Seção de Gráficos */}
        <div className="charts">
          <ChartSection
            title="Daily Reports"
            location="Floripa, Santa Catarina, BR"
            iconClass="fa fa-usd"
          />

          <div className="charts__right__cards">
            {dashboardData.reports.map((report, index) => (
              <div key={index} className={`card${index + 1}`}>
                <h1>{report.title}</h1>
                <p>{report.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;