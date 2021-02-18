import Header from "components/header";
import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    <span data-feather="home"></span>
                    Dashboard <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="file"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="shopping-cart"></span>
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="users"></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="bar-chart-2"></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span data-feather="layers"></span>
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div className="overflow-auto" style={{ maxHeight: "300px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              finibus viverra odio gravida lacinia. Donec pretium euismod ex.
              Curabitur sit amet tellus bibendum, porttitor nibh sed, tristique
              diam. Maecenas cursus tincidunt velit vel imperdiet. Nam vel
              pellentesque ex. Vivamus dolor turpis, faucibus quis nisl sit
              amet, scelerisque porta magna. Aliquam vel enim vitae nisi gravida
              imperdiet. Morbi aliquam, massa in finibus pellentesque, metus
              elit bibendum eros, sit amet egestas augue lacus vel magna.
              Curabitur sem enim, dignissim non pharetra a, efficitur non augue.
              Aenean ultrices eleifend sapien, ut venenatis odio maximus quis.
              Nulla in fringilla nibh, sed dapibus elit. Aenean nec felis quis
              velit venenatis laoreet. Nam sed urna nec lorem maximus congue.
              Mauris vehicula ex neque, sed cursus mi maximus sit amet. Aenean
              gravida purus vulputate molestie molestie. Fusce volutpat ligula
              mi, aliquet blandit sem hendrerit pharetra. Sed finibus, tellus
              sed vestibulum lacinia, ante turpis consectetur velit, quis
              elementum tellus est in mauris. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Donec ultrices elit quis ipsum
              faucibus ornare. Vestibulum convallis euismod ipsum, eget suscipit
              magna volutpat ut. Duis luctus ante et odio maximus hendrerit.
              Vestibulum quis facilisis erat. Donec consectetur felis enim, vel
              ornare nunc feugiat nec. Praesent malesuada scelerisque ipsum, vel
              mollis nibh tempus vitae. Proin vehicula erat ex, non convallis
              nunc consectetur sed. Nulla lacinia arcu neque, ac eleifend magna
              tristique eget. Donec luctus, orci condimentum maximus dictum,
              massa ipsum iaculis lacus, quis pretium erat tellus vel nulla.
              Aliquam viverra, mi non commodo efficitur, enim sem pretium risus,
              eu interdum ante lectus et augue. Sed feugiat accumsan nisi, non
              mattis diam aliquet nec. Quisque in tincidunt turpis. Donec sit
              amet felis urna. Pellentesque in arcu sit amet odio blandit ornare
              sit amet eu felis. Aliquam nisi nulla, fringilla vel posuere
              pellentesque, sollicitudin hendrerit velit. Nam eget ligula
              commodo, fringilla eros a, tempor erat. Quisque congue fermentum
              metus, sed volutpat ex. Nulla vitae ultricies lectus. Suspendisse
              potenti. Integer tempus vulputate velit ut elementum. Aenean in
              elit eros. Nulla finibus vel erat vitae tempor. Praesent tincidunt
              pellentesque velit. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Aliquam sed semper
              nibh. Aenean a lobortis ante. Morbi ultricies bibendum
              ullamcorper. Sed euismod porta est, ac porttitor nisi vestibulum
              vitae. Integer felis velit, varius maximus quam quis, pulvinar
              maximus magna. Quisque dictum auctor leo vitae fringilla. Etiam
              tellus odio, pretium nec sapien consequat, porta iaculis neque.
              Donec hendrerit tortor sit amet neque sagittis, quis mattis est
              cursus. Nunc vitae tortor nisl. Praesent faucibus lacus pulvinar
              tellus ultrices, porttitor euismod libero sollicitudin. Vivamus
              facilisis lorem risus. Sed eget euismod magna, in venenatis augue.
              Etiam posuere orci erat, id rutrum orci vestibulum nec. Donec
              blandit tortor varius massa scelerisque lacinia. Nulla facilisi.
              Mauris nec nulla in elit porttitor finibus sed eu ligula. Nulla mi
              neque, dignissim ultricies pulvinar a, iaculis sit amet nulla. Sed
              rhoncus ligula a viverra suscipit. Nunc porttitor vehicula magna
              ut lacinia. Nunc sed posuere nulla. Aliquam ut arcu convallis,
              aliquet sapien et, viverra urna. Vivamus felis turpis, dapibus
              quis tincidunt molestie, cursus aliquet diam. In a dolor quis nibh
              consectetur pretium. Nullam malesuada lorem ac dolor placerat
              congue. Integer elementum porttitor velit, a dictum erat aliquam
              id. Quisque euismod dolor ac egestas hendrerit. Integer at ex
              ante. Curabitur iaculis, nisi venenatis maximus ornare, lorem quam
              molestie sem, ut suscipit tellus ex sit amet nunc. Phasellus eu
              purus efficitur, ultrices mi consequat, ultrices libero. Mauris id
              sapien quis lectus lobortis congue nec quis dui. Morbi vitae ipsum
              gravida, rutrum tortor non, facilisis risus. Fusce sagittis
              imperdiet ligula vel rhoncus. Maecenas sed arcu maximus, posuere
              mi sit amet, varius ex. Quisque urna mi, accumsan quis purus at,
              mollis volutpat quam. Suspendisse augue nibh, mattis ac massa sit
              amet, pretium aliquam lorem. Vestibulum varius turpis purus, eget
              egestas sapien porta ac. Aliquam cursus eros sodales purus ornare,
              non consectetur elit varius. Morbi eleifend augue eu leo lacinia,
              sed facilisis arcu ultrices. Sed odio dui, tempor eget massa
              tristique, blandit gravida felis. Nam maximus arcu nec mi feugiat
              volutpat. Integer nunc justo, feugiat varius aliquam ut, tempor
              quis arcu. Morbi mi felis, molestie id neque in, convallis
              convallis orci. Proin nulla turpis, suscipit a dui nec, congue
              elementum ipsum. Vivamus ornare sapien lorem, at elementum arcu
              scelerisque sed. Integer sed lectus orci. Phasellus ex risus,
              luctus quis lacinia sed, bibendum eget eros. Nam aliquet mauris in
              est mollis, non porttitor dui rutrum. Praesent auctor faucibus
              felis, eget ultrices sem consequat ac. Nunc tristique mollis arcu,
              ut sollicitudin metus. Donec pharetra tortor sed congue dignissim.
              Etiam laoreet molestie magna, eu suscipit quam porta id. Vivamus
              dui sapien, pharetra ullamcorper felis eu, egestas suscipit nibh.
              Integer non leo aliquam, hendrerit elit eu, sollicitudin odio.
              Quisque eu dui sed dolor varius pretium sed vel metus. Quisque
              nisl nisl, dapibus efficitur turpis a, pellentesque iaculis elit.
              Cras posuere congue hendrerit. Aliquam vitae tellus egestas,
              tempus ante vitae, consectetur orci. Nunc volutpat, mi ac molestie
              faucibus, diam enim pharetra ligula, porttitor condimentum diam
              lectus ut tortor. Nulla porta dignissim tortor, convallis placerat
              turpis porta ut. In ut justo in odio commodo gravida eget a
              tellus. Aenean neque augue, pretium ut tristique at, finibus quis
              sem. Sed vehicula nisi risus, quis lacinia ligula imperdiet sit
              amet. Sed sed metus risus. Aliquam faucibus vitae velit sed
              venenatis. Ut ut ante nulla. Quisque in nisi quis erat aliquam
              egestas. Praesent varius commodo mauris at mattis. Mauris non
              nulla non sem maximus interdum sit amet non lectus. Pellentesque a
              imperdiet quam. Donec accumsan nibh non finibus commodo. Mauris
              tincidunt mollis rutrum. Suspendisse potenti. Sed ultricies turpis
              nec lacus dapibus, at vehicula augue suscipit. Cras pretium lorem
              varius purus fringilla, hendrerit suscipit nulla imperdiet. Etiam
              facilisis orci sit amet urna hendrerit cursus. Duis a suscipit
              nulla. Mauris sagittis elit orci, in consequat tellus convallis
              ac. In eget tincidunt velit. Sed facilisis ultricies molestie.
              Morbi ipsum elit, dictum ut commodo vitae, efficitur quis nunc.
              Aliquam dignissim sem ante, a aliquam tellus tempus id.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
