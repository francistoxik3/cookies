export default function CookiesPage() {
  return(
    <s-page heading="Configuration de la bannière">
      <s-section>
        <s-grid justifyItems="center" >
          <div style={{width: '300px'}}>
            <s-image
            src="https://cdn.shopify.com/s/files/1/0513/8681/0555/files/undraw_welcome-cats.svg?v=1769705490"
            alt="Four pixelated characters ready to build amazing Shopify apps"
            inlineSize="auto"
          />
          </div>
        <br />
        <s-heading>Commencer à configurer votre bannière de cookies</s-heading><br />
        <s-paragraph>Bienvenue sur la page de configuration de votre bannière de cookies, vous pouvez également customiser votre bannière.</s-paragraph><br />
        <s-switch
          label="Activer cookies"
          details="Activer/Désactiver la bannière"
        />
        </s-grid>
      </s-section>
      <s-section heading="Bannières de cookies">
        <s-heading>Position</s-heading>
        <s-select>
        <s-option value="top">Haut</s-option>
        <s-option value="down">Bas</s-option>
      </s-select>
      </s-section>
      <s-section heading="Couleur et style">
        <s-heading>Couleurs de bannière</s-heading>
        <s-color-field placeholder="Select a color" value="#000000" />
      </s-section>
      <s-button-group>
        <s-button slot="primary-action" variant="primary">Enregistrer</s-button>
        <s-button slot="secondary-actions" variant="secondary">Annuler</s-button>
      </s-button-group>
    </s-page>
  )
}
