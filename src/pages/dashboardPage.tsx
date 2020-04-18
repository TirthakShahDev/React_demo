import Page from "../components/Page";
import AccessDenied from "../pages/accessDenied";
import React from "react";
import { AbilityContext } from "../abilityConfig/ability-context";
import { Common } from "../constants/common";
import { withTranslation } from "react-i18next";
import { TFunction } from "i18next";
import { Formik, Field } from "formik";
import {
  ReactstrapInput,
  ReactstrapSelect
} from "reactstrap-formik";
import { ValidationFormSchema } from "../validationSchemas/validationFormSchema";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { IValidationFormState } from "../Types/StateTypes";

class DashboardPage extends React.Component<
  { t: TFunction },
  IValidationFormState
> {
  private initialState: IValidationFormState = {
    email: "",
    password: "",
    country: ""
  };

  static contextType = AbilityContext;
  render() {
    const { t } = this.props;
    return this.context.can(
      Common.Actions.CAN_READ,
      Common.Modules.DASHBOARD
    ) ? (
      <Page
        className="DashboardPage"
        title={t("dashboard.title")}
        breadcrumbs={[{ name: t("route.dashboard"), active: true }]}
      >
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Card>
              <CardHeader>{t("dashboard.formtitle")}</CardHeader>
              <CardBody>
                <Formik
                  initialValues={this.initialState}
                  onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                  }}
                  validationSchema={ValidationFormSchema}
                >
                  {props => {
                    const {
                      dirty,
                      isSubmitting,
                      handleSubmit,
                      handleReset
                    } = props;
                    return (
                      <form onSubmit={handleSubmit}>
                        <Field
                          type="email"
                          label="Email"
                          name="email"
                          id="email"
                          component={ReactstrapInput}
                        />
                        <Field
                          type="password"
                          label="Password"
                          name="password"
                          id="password"
                          component={ReactstrapInput}
                        />
                        <Field
                          label="Country"
                          name="country"
                          component={ReactstrapSelect}
                          inputprops={{
                            name: "country",
                            id: "country",
                            options: ["India", "USA", "UK", "Saudi Arabia"],
                            defaultOption: ""
                          }}
                        />
                        <Button
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </Button>{" "}
                        <Button type="submit" disabled={isSubmitting}>
                          Submit
                        </Button>
                        <pre
                          style={{
                            background: "#f6f8fa",
                            fontSize: ".65rem",
                            padding: ".5rem"
                          }}
                        >
                          <strong>props</strong> ={" "}
                          {JSON.stringify(props, null, 2)}
                        </pre>
                      </form>
                    );
                  }}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    ) : (
      <AccessDenied />
    );
  }
}
export default withTranslation()(DashboardPage);
