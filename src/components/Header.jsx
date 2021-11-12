import { useState } from "react";
import { Image, Navbar, Row, Col, Collapse, Nav } from "react-bootstrap";
import items from "../items";
import "../sass/header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [item, setItem] = useState(0);

  const incItem = () => {
    if (item < items.length - 1) {
      setItem(item + 1);
    } else setItem(0);
  };
  const decItem = () => {
    if (item > 0) {
      setItem(item - 1);
    } else {
      setItem(items.length - 1);
    }
  };

  return (
    <header>
      <div
        className="mobile-header d-lg-none"
        style={{ backgroundImage: `url(${items[item].mobileImage})` }}
      >
        <div
          className={`mobile-header__backdrop ${!showMenu && "d-none"}`}
          onClick={() => setShowMenu(false)}
        ></div>

        <Navbar className="py-5 px-3">
          <Col xs={2} className="text-center">
            <Image
              src="./images/icon-hamburger.svg"
              alt="menu icon"
              onClick={() => setShowMenu(true)}
            />
          </Col>

          <Col xs={8} className="text-center">
            <Navbar.Brand href="#home">
              <img src="./images/logo.svg" alt="React Bootstrap logo" />
            </Navbar.Brand>
          </Col>

          <Col xs={2}></Col>
        </Navbar>

        <Collapse in={showMenu}>
          <Row className="mobile-nav bg-light g-0">
            <Col
              xs={2}
              className="d-flex align-self-center justify-content-center py-5 ps-3"
            >
              <Image
                src="./images/icon-close.svg"
                alt="close menu icon"
                onClick={() => setShowMenu(false)}
              />
            </Col>

            <Col xs={10} className="py-5">
              <Nav>
                <Nav.Item>
                  <Nav.Link href="/" className="text-dark fw-bold">
                    home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/" className="text-dark fw-bold">
                    shop
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/" className="text-dark fw-bold">
                    about
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/" className="text-dark fw-bold">
                    contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Collapse>

        <div className="mobile-header__controls">
          <Image
            src="./images/icon-angle-left.svg"
            alt="left angle icon"
            className="mobile-header__controls--left-control bg-dark p-4"
            onClick={decItem}
          />
          <Image
            src="./images/icon-angle-right.svg"
            alt="right angle icon"
            className="mobile-header__controls--right-control bg-dark p-4"
            onClick={incItem}
          />
        </div>
      </div>

      <div className="mobile-content py-5 px-4 d-lg-none">
        <h2 className="mobile-content__title pt-5 pb-3 px-3 display-5 fw-bolder">
          {items[item].title}
        </h2>
        <p className="mobile-content__body px-3 pb-5 text-primary fw-bold">
          {items[item].body}
        </p>
        <a
          href="/"
          className="mobile-content__action px-3 pb-5 text-uppercase text-decoration-none"
        >
          <span className="mobile-content__action--title text-dark fw-bold pe-5">
            {items[item].action}
          </span>
          <Image
            src="./images/icon-arrow.svg"
            alt="arrow icon"
            className="mobile-content__action--icon"
          />
        </a>
      </div>

      <Row className="desktop-header d-none d-lg-flex g-0 position-relative">
        <Navbar className="py-5 px-3 position-absolute top-0 px-5">
          <Navbar.Brand href="#home">
            <img src="./images/logo.svg" alt="React Bootstrap logo" />
          </Navbar.Brand>

          <Nav>
            <Nav.Item>
              <Nav.Link href="/" className="text-light fw-bold ps-5">
                home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="text-light fw-bold ps-5">
                shop
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="text-light fw-bold ps-5">
                about
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/" className="text-light fw-bold ps-5">
                contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Col className="__desktop-image" lg={7}>
          <Image src={items[item].desktopImage} alt={items[item].title} fluid />
        </Col>

        <Col
          lg={5}
          className="desktop-content d-flex flex-column align-items-start justify-content-center px-5 pb-5 position-relative"
        >
          <h2 className="desktop-content__title pt-5 pb-3 px-3 fw-bolder">
            {items[item].title}
          </h2>
          <p className="desktop-content__body px-3 pb-5 text-primary fw-bold">
            {items[item].body}
          </p>
          <a
            href="/"
            className="desktop-content__action px-3 pb-5 text-uppercase text-decoration-none"
          >
            <span className="desktop-content__action--title text-dark fw-bold pe-5">
              {items[item].action}
            </span>
            <Image
              src="./images/icon-arrow.svg"
              alt="arrow icon"
              className="desktop-content__action--icon"
            />
          </a>

          <div className="desktop-content__controls position-absolute">
            <Image
              src="./images/icon-angle-left.svg"
              alt="left angle icon"
              className="desktop-content__controls--left-control bg-dark p-4"
              onClick={decItem}
            />
            <Image
              src="./images/icon-angle-right.svg"
              alt="right angle icon"
              className="desktop-content__controls--right-control bg-dark p-4"
              onClick={incItem}
            />
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
