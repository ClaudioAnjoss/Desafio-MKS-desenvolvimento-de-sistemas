import './styles.css';

export function CardAside() {
    return(
        <div className="content__card--aside">
            <div className="card__title-img">
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-40-alum-gold-nc-se_VW_34FR_WF_CO_GEO_BR?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171039000,1630712364000" alt="DESCRICAO" />
                <span>Apple Watch Series 4 GPS</span>
            </div>
            <div className="card__increment-value">
                <div className="card__increment">
                    <span>Qtd:</span>
                    <div className="increment">
                        
                    </div>
                </div>

                <span className="card__value">R$399</span>
            </div>
        </div>
    )
}