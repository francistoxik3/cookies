export default function AdditionalPage() {
  return (
    <s-page heading="Additional page">
      <s-section heading="Multiple pages">
        <s-paragraph>
          The app template comes with an additional page which demonstrates how
          to create multiple pages within app navigation using{" "}
          <s-link
            href="https://shopify.dev/docs/apps/tools/app-bridge"
            target="_blank"
          >
            App Bridge
          </s-link>
          .
        </s-paragraph>
        <s-paragraph>
          To create your own page and have it show up in the app navigation, add
          a page inside <code>app/routes</code>, and a link to it in the{" "}
          <code>&lt;ui-nav-menu&gt;</code> component found in{" "}
          <code>app/routes/app.jsx</code>.
        </s-paragraph>
      </s-section>
      <s-section slot="aside" heading="Resources">
        <s-unordered-list>
          <s-list-item>
            <s-link
              href="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
              target="_blank"
            >
              App nav best practices
            </s-link>
          </s-list-item>
        </s-unordered-list>
      </s-section>
      <s-section>

      </s-section>
      <s-button command="--show" commandfor="modal-1">Add Product</s-button>
<s-modal id="modal-1" heading="Return Policy">
  <s-paragraph>
    We have a 30-day return policy, which means you have 30 days after receiving
    your item to request a return.
  </s-paragraph>
  <s-paragraph>
    To be eligible for a return, your item must be in the same condition that
    you received it, unworn or unused, with tags, and in its original packaging.
    You’ll also need the receipt or proof of purchase.
  </s-paragraph>
  <s-button
    variant="primary"
    command="--hide"
    commandfor="modal-1"
    slot="primary-action"
  >
    Accepter
  </s-button>
  <s-button
    variant="primary"
    command="--hide"
    commandfor="modal-1"
    slot="secondary-action"
  >
    Refuser
  </s-button>
</s-modal>
    </s-page>
  );
}
