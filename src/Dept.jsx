import React from "react";
import Navbar2 from "./Navbar2";

function Dept() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <section id="heading">
          <div
            className="upper d-flex align-items-center"
            style={{ height: "130px" }}
          >
            <div className="d-flex flex-column align-items-center mt-3">
              <img
                src="./New Project 26 [D4CFFD9].png"
                alt="Waste Management"
                style={{ height: "90px", flexShrink: 0 }}
              />
              <p className="fs-4">SBSSU</p>
            </div>
            {/* <p className='ms-3 flex-grow-1 text-center'>Waste  Management  Survey </p> */}
            <div className="flex-grow-1 text-start">
              <p className="headres mb-0">Departmental Waste Management</p>
              <p className="footres  mb-3">Analytics & Performance Dashboard</p>
            </div>
          </div>
        </section>

        <Navbar2 />

       
        <section id="overview">
          <div className="boxes-container">
            <div className="box">
              <p className="text">Total dustbins</p>
              <img
                src="data:image/jpeg;base64,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"
                alt="logo"
                className="logo"
              />
              <h3 className="number">18</h3>
            </div>

            <div className="box">
              <p className="text">Avg capacity/dept</p>
              <img
                src="data:image/png;base64,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"
                className="logo"
              />
              <h3 className="number">56.66 Ltr</h3>
            </div>

            <div className="box">
              <p className="text">Frequency</p>
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUTExEVFhUWGBYYGBgYGRcbFxYYGBYWFhgYFxgYHiogGBolGxcdITEiJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGzAlICUtKy0tLS0tLy0wLS0vLS0wNS8tLS0yLS0tLS0tLS0tLS0tLS0tLS0tMC0rLS0tLS0tLf/AABEIANwA5QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAUDBgcCAQj/xABCEAABBAAEAwUFBgQEBAcAAAABAAIDEQQSITEFQVEGE2FxgSIykaGxBxVCUtHhFGLB8COCssJykqLxFiQzY5Oj0v/EABsBAQACAwEBAAAAAAAAAAAAAAABBAIDBQYH/8QANBEBAAIBAgQEBAMIAwEAAAAAAAECAwQRBRIhMRNBUWEicaGxMoGRFBVCYsHR4fAjM1IG/9oADAMBAAIRAxEAPwDuKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwYrFxxDNJIxgJABc4NFnYWeamKzPaGNr1r3lnUMhAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGnce7LRT4l0sr3vaQ3/Ds5W6URe9GroVrfVW8eqtTHyVj83PzaGmTLz3mZ9mwYbF5QA73dBfTlr4KrMLsTssVDMQR8e4hhI5anyRMIvDZnG96G5JP9VEEvuGx7nPDSBVEk9AP+4+K2WrERur48s2ty7JsM7Xi2uDh4G1qretutZ3WLVmveGRZIEBAQEBAQEBAQEBAQEBAQEBAQEBBWY33neQ+IH6LKGE90Vr9PAoxWAxOWEO5jTXwNfRYy2R2Y/vGw2soJAJJ2Fi68StlabxvKJt5Mbsc6nNdRBBFjT/uptjjbeEVt12ei7LEG83any5/LRYUhjmttGypxcpDZCPyAeWZ7QtWsnbDLLh1YtqI3V8Ejo3Z2GidwOf6jw/scKJtjtz0d+9K2jlt2bZwviAnbezhuP6jwXX02ojNXfz83Jz4ZxW28k1WWkQEBAQEBAQEBAQEBAQEBAQQOJzlvOhv5+ChMPXD8TbNbtt31rcKSVDxTHOmq7azcNB8x7Vbnw2HzRDxg8aWjISSfwHexzYfqD6KYY2jzWEY5uAasmHzaz2r4tJC5pikc2gbrVupHUUT7Kp6i8xMRDu8J0+PLS3iRE9enqy9ncc6SJ7pHZjn51sYmmqHiT8VZ0mTek80+atxbT0xZaxSNo2/qt4MSwi84+Ol6bErfkvE12hzK1ndWR8ZxL7rCOk9pw9iwWxtJDbvQkjXleqp1zXj+F0snDsFuvixHSO/Xr+SIO0DJ3GJrXtkynMx7dQGubd0aFOpadVqK3xTWO7LT8Ly6bLGS0xNdu8Sh4njzA4RjQ661bTXLr6rnckzDt10l5rzJh7Z4bAUT3k5foSxoblG9APov160reHkw9e8qd+G6jUR2isR6z/bpDeOF8WixId3ZNtrMCCCCRYHQ6dCVbwZ6Zq81HBmNp2TluQICAgICAgICAgICAgICAgEIIkuEo5maHpyPgoS0mLj+GlkdG0ubqaDm1RG+Ujl50fBaoz0WJ0uTyjdZ4ZsYcR3gL2hri2joHZqPrR+CznLSs9ZavAvNd4jo+cRlbPmhbnBLaLhYcAfy6gg+KqZdVNvgos4NPGOYyW8vJQdm+BThk8Uxc5jXtERcSM+hLvZJ933dNrzVzWOLBa9Z5/yXdbrMXPS+HpM/iiP97rTExR4eo2XGXEuJa0vB2GutgfortKRWNoczPnyZpi1/yZARkJLzprmLMv8Aq5+izaFbh+J4eI2ycYeS8wLoPYkbqC05BZ80jNjpO11jFos+avNijf8ARW4Zr8fipponZQ4Bjpcpa0gNb+GyQSW9boCzyVG1YzXma9ne5q6HTUpm6277f76IPGOzE2FLn5+8jFatbXd1ocx3INg+pWOTDNI3WtHxPHqLTWek+UKbgeA/iMRnfpHEA6Qk22xrlBPj8gVRz35YWOI6uNNptv4rdI/u7N2SwZjhL3NyumcZCOYBAawHxyNbfja6eixTjxRE956vD+67VsEBAQEBAQEBAQEBAQEBAQEFbxjjDcNlBaXOddNFDQVZJOw1CqarWU08RzRvMrWm0ls++07RHeXMsdwtzppJY25A95e0Ei2k6nXzJXItxCszvFXapptqxE2+iZxqKSaeLERAskYMr7cKkbdgHLVak/EdEzcQrk2mKyz0uCuLHbHed4nrHTtK5w/FCzaJ19czduiywcRpj/hnf8lTNoJyfx/SUfE8Rmc/M1tDpYIroVa/fNP/ABP6qU8Gvzc0ZY/STh+Mc173TQ95m0aA4DKCbOu52Feq014rWLTM1nr7r+Xh9bUpWttpjv0nqx4aQRkkRPskkAyWACdAb3A8eiz/AHxX/wAS0fur+f6Sk/eJOjoLH5bZl9RzU/vinnSfoieFT3rk2n5SruzjpMIHtyZmurQOAoi9fmPgtGLikU3+F0tfgrqeWYttMeydiuIOe0t/h2vzEg947MMpvQc9LHNbL8XiY2iilh4dFLc3ibbdtoQOGQRQBjHREQMOZ4BaXPIogu6i9SOdAbaKhi1FPEi2WOjPVaPLqbzebxM+m30dNjeHAOBsEAg9QdQvUxMTG8OFMTE7S9KUCAgICAgICAgICAgICAgICDWO2XBZcR3b4gHFuYFtgGjRsXpyXJ4no8meK2p3jydfhWsx4JtXJ2nbq5w/HRhxaXUWkgijoQaI26rz84MlZ2mHqqxzREx5vH3nF+f5H9E8C/onkn0fW8RiP4/kf0UeDf0OSfR8+84vz/I/op8C/ock+j63iMR/H8j+ijwb+hyT6Pn3nF+f5H9FPgX9Dkn0fRxGI/j+R/RR4N/Q5J9Hz7zi/P8AI/op8C/ock+j63iMR/H8j+iicN/Q5J9FhwXCuxrnNgpxblzG6DQ66JvyO17Ldi0ObLO1YVtTqcemiJyefb3dawcPdxsZd5WtbfWgAvXY68tYr6Q8Tkvz3m3rMyzLNgICAgICAgICAgICAgICAgICD8+8eiyY3EN/96WvV5I+q87qY2yW+b6Bor82npP8sfZjj4WTu4Dwq1TnURHZtnLHkzQcLAOslD/h/dYTqN/Jj43pDx90/wA//T+6n9p9k+L7MkHCwDrJWn5f3UTqN/JE5pjtDF90/wA/y/dT+0+yfF9mWHhYF3JWmns/uonUb+SJzT6MX3T/AD/9P7qf2n2T4vswTYV0YJOo6j+vRbK5Iv2Z1vEuh/Y3F7GJf1dG34Bx/wBy7fDo+GZea/8AobfHSvtLpC6LzogICAgICAgICAgICAgICAgICDi/aXDZeJYo9HNI/wA8bXH6rzXE52yTHq9rw+++jx/KfvKMuUsiAgICAgIPjmgijsVMTtO8EdG8/ZHh8mGmPWdw9GsjH1teq4f1xbvO8evzZ6x/LH3lvKvuGICAgICAgICAgICAgICAgICAg5P23Zl4hN/MyF3yLf8AavOcXr/yRL1vCZ30ke0zH2Uy5DoiAguuDcLYWd/Oahztj3ouLrstP8uhPgHdF0NLpqTXxcv4d9v9+TnarU3i/hYfxbb/AO/P+yFxnhzsNM6J3LVp/M0+6f75gqvqcE4ck0n8vks6XPGfFF4/P5oSrrAgIOjfZkz/AMiHfmlmP/2Ob/tXr9DXbDDy3GZ31U+0R9m1q25QgICAgICAgICAgICAgICAgICDmH2jRVjmu/Nh2j/lkf8A/pcHjEday9RwW2+ntHpb7xDXVw3WEBSJeK4i+SOONxGSIENAFb7k9T4/qVuyai96VpPaFfHp6Y72vHe3dL4nxnv4Io3MAdFQzXeZobQu9b9Vvz6vxcVaTHWPNp0+j8HNa8T0ny91SqK8IFqY7jqH2fxZeH4fxaXf873O/qvZaWNsVYeQ4pbfV3+f2bCt6gICAgICAgICAgICAgICAgICAg519qDKnwrurJm/Axn+q43GI+CHo+Bz8GSPeP6tTXnnbEGxYeCPD4J0krAZZ8zYvzNblrNqaAvmNacF1aUph002vHxW7fJycl8mfVRTHPw02mfm11cp1nuAtDm5wS2xmA0JF6140s6cvNHN282F+blnl7+Sx7RcNGHl9g3FIA+J29tPK/D6EKzrNPGK+9fwz1hV0WonNj+L8UdJVaprrxMaa49AfosqRvaEx3df7Kw5MFhm9IYv9Ate0xRtSPk8TrLc2ovP80/darYrCAgICAgICAgICAgICAgICCn7U8GdjISxk8sMg9qN8cj2U7kHhhGZvUH0Qc17KM4tjZP4ebGYiOIDNI+4w+rrJHLG3MXnrmNb9AQ2b7UIqbhD0kezUkn2oydzqfcXL4rG+Hd3eBT8eSPbf6/5aUvMvQikXw7RNdRmwscpDWtbZIDWtAFNaBQs2fXwC6X7wrb/ALKRLmfu+1f+vJNfP5qnHztkkc5sYjaapjTYFADTzq/VUc2St7zasbR6L2GlqUitrbz6rbDccgZE1hwMbnA6kk+1pvqCb+X0V7HrcVccVnHEqN9Fmtkm8ZZiJ/3ZD4vxRs4Y1sDIg2/dJN3XUaBaNTqq5YiK1iNm/TaW2KZta8239Vaqa4j8QNRP/wCE/RbcMb5IZUmItG7YO0n2iyMczC8OyOyNax0pGYOfo0MivQ60MxsG9NrPtKxtEPA3ne0z7upYJj2xsEj87w1oe6gMzq9ogDQAnkpYs6AgICAgICAgICAgICAgIMc8zY2ue9wa1oJc4mgABZJJ2FIOadqPtPcGubg4TrYE0mgF/ibHufDNXiEGgdnuNz4KPv4HU8HJ7QLmvjtpAeN7zSk5hrTXa9Q2finbj7xgjjmg7qZkzHW03G8U5hI5tPtba+aocSjfBLscEnbUTHrWUVeUemEBAQEBAQVfEuHSTOaO9prnMaGVpbnBtu19rUrr8O1GKloryfFPm5Wu0ebPvPPtWImdtvSH3inDG8LxUffSGUseyWMRjKC1knvvBv8AGxwDBvl3or0byzv2DxTJmNkjcHscAWuBsEHogzICAgICAgICAgICAgICAg599s2PdHhYowaEsoDvENa5wafDMAfQIOTtmsEdeRQYrLARyJB9RYH+o/FB9w0rjIzX2Rr9FU10b4JdPhFttVX3ifs2xeQerEBAQEBAQRcbxBuHMcjtckkb8t0XBjw+vDar8V0eG4rXzRMR0hT1upphxW5p6zExH5tb45xR+MlM8hHePzktF00WCwNB2Gu3UE816l41O7M9osVgXXBKQwmzG72oz1tp28xR8UHbOxfa+PiLDQyTMrPHd6HZzDzafiDp0JDZUBAQEBAQEBAQEBAQEBBw77VeIHG4wxB9RYa2DxkNGQ+NaN8Mp6oNLdhHN911joUGeI9W353og9GcAgZa1r4rRqY3xW+S7w63Lqsc+7agbXjZ7vYvqgEBAQEHiaTK1zjs0E/AWs8dOe0V9ZYZL8lJt6Ru1fEVL7TnW4/AdAPBeyw4a4qRSrxObNbNeb2nqjCE+HxC2tTxLhiSLd8CgseByzYDEMxMTxnZuCdHsPvMd4H5EA7gIP0dw3GtxEMczPdkYx7fJ7Q4fIoJKAgICAgICAgICAgICD8oY7irjLKXakySE+ZeST8UCDHO6boJZxbq934oMUTjI8HZrSD6rXljekx7S36a3LmpPvH3bvgY3SBjWglzgKA3Oi8f4dr5OWsbzu9rlvXHE2vO0Q2aXs4IsM97zcgFijo2jqP5j/fiuxbhUYtNa9+ttv0eejjM5tXTHj6U32+f9mtLgvRiAgIK/tBOGYeQ9Wlo83eyPrforvD8c31Ffbr+ilxHJFNNaZ842/VpME79l6145nIkPNBmjJaLf6dSg9S8QbvqUH6Q7HQGPAYRjvebh4Q7wd3bb+aC4QEBAQEBAQEBAQEBAQflrifD2CecBw0mmG3SRwI+SImdnzDYKtbBRLyYZGnqLQSMc0RNBbZ120oaEk6KbV6JrO0xLsHYHBBuFZJl9p9688oNAeWl+qp8O08Y6TeY6zP0XOO6qcmo8OJ6R917xlg/h5QebHemit6mObDePaXL0s8uek/zR93MV4bZ9EXfCuzM01Fw7tnV258m/qulpuGZcnW/wx9XM1PFcWLpT4p+n6tpj7PwxRkNbZIIc47kEUfLe/RdzHosOOk1iO/m4OXXZsl4tM9u0eTQcZhzE9zDu0159D6jVeVzYpxZJpPk9bhyxlxxePNrXaEh72sJ9lozHxJsD4D/AFLucHxRFJyevRweNZt71x+nVW92z8IXZcR8LSNiggyAvdrdBB8lwTnD/DBeSCAG6uJ6ADcoP00eOwxtaPa2FADw21WidRSG2MNpfXcdb+Rx+Cw/aa+jLwJ9UrD8Uif+Kj0dp+y21zUt5tdsdoTVtYCAgICAgICCk4l2swmGlMUsuV4q/ZeQLAI1ArUG1EzEK9tVirfkmeqp439oOGijvDuE0h0Dfaa1v8zyRt4DU+GpETLXl1uOtd69Zawz7TMXzigPk2Qf7yo5pVf3jb0aLg+HS947ESRnJI91Po5HPLi5wB2u708Cpmd4NZl8TBW3bq8jh+Z4Dd3ENA2GZxAGvIWVjEquHLeLRET5wtv/AAPjmhzxExzGE5yyWJwbk1cCM12Om62RO/Z6GY2Q4MGZXtjFXIcg5auIaPqtjHfZ27B4ZsMbY27Ma1o8A0AD6KYiIjaFW95vabT3lSdp58/d4drg0ynUnkP1Oy53Ecm8VwRO03+zpcJxfHbUWjeKRv8An/jumcI4BDAA4DO78zuXkNgmn0OLB2jefWW7U6/Nn6TO0ekLdXFIQaV2zwFFsgH8rvq0/wBPguFxfB2yx8pd/g2o74p+cf1cn4rFM+Vz8rmtdqywQHMHshzbGoNbrqaPF4WGtfZytbl8XPa3v9kJsrm+8PUKyqvYxOYhoBJJoADUnoBuSg2vhfYySQZpz3LDy3kI8vw+uvgq99RWO3Vurhme7auG4GHCNy4eMN6vOr3eZP028lVve1+6zTHFezNm1s9R9VgzXihBugk8PnyuA71zB8W35H6rbitMTtvs1ZKxtvs2lg01N+K6EKb0pBAQEBAQUXF+zmEleZpYczzQJzPF6ADY8gKUbbq99LivbntXqoMf2PwktZGuiom6e516ae/deinlhoyaDFb8PT5f5UPGOwkhIGEBcNnOe9gyGxRI0sHXYHZYzX0VsmhtFo5Osee+zYO0vZVzMFh8PhmF/dSWbLA51tfmcboElzr9U5emyxq9PacUUpHZqGE7IY1kkbn4cta2RjnOL46AD2knR1nQbDVa72ikTa3ZVwaPPOSvw+cejpfDJmvEkVZRL3jhtu68wPjz+Ko6DUxa00nzmZh6fVYZrEW9OktD7JdjMZDiY5cSzKyIOdYcw27KWAU03XtE/wCULrxPVzsn4XQHOWxUaTx/D97MXEvaR7pBogbgjr1C8trslv2id47T03en4bm8LBEV2mJ7tv4Tie8jaTuR89j813NPl8XHF3Ly05bzCatzWIKftXFnw8jRWdzSGiwNT7rteTTr6c9lqzU56TXbdb0MzGes77KLC8Jifho8NJb+7blF6OGpOZhG2/LprYVjbo25dNyRt5ernPaLhzcNiHxE5g2i12xLXNDhdaXrXmCsJULRtOy77CcPfI/OwNjiaac9rW55DvkzuBIHXLXzVbUWiI2827DEzLfJ8G1+psHqP0VHdaQ5eHOGxB+RU7p3Q3RuDmtym7HI9eSC7JpEPBdaIeoYXPNNBJ8P70U1rNp2hEzEd218MgfGwNe4Hp4DpfNdHFW1a7WU7zEzvCWtjAQEBAQEGHFQZxV1raCC7hrhs5p+I/VTujZB49w2V+GfGxkTs5GcPc5rQwakhzfxWB/eixtMbNOfHe9OWsb7q3HcOjxeEZBLOI3RusFsjptgQLLgC7f0oaqrOswbfjhlbh2bLiilomPr92efFgRNhiHsMAA1JLjy1JPnuVytXrfGjkr2djSaOMMRv3RKLTbbHQjSjd2PM381SibUneOkrvw26StuH4SWYZzM8A7HNZP+Vpoeq6mnwZ83/JbJMf7+ihmyYsfwRSGn4/ttHHNLDIXtMb3xkhoIdlcW3prrW1K3kx6v+G/9FWtNP51RcZ2qiny/4zTlFAvOU+VOo1oqGbS6i8xzxMrWPJjr+Fb9nO0THvZDmi0ByZXC3HVzgfaN6WfQq7oueseHNdoV9RET8US26SVrRbiAF0FZAxHEQHMYXd33nulwJc6iAcrQPEanqom0R0ZRWZjeGXFcKbIz2DbwbzOO/geiyidm7TZoxX3nsh4bhAa0yTGg0F2Ua1WtkjfyCxyZIrWbT5LWXVzeeTH5+ai4/wBk8NxMDE97LC+g3NYogC25mG82juRB+C14c0Za80KWbHOO3LZqMHYzi2HkvDMc9lipWyRRteOro3yX10IOyztWLR1a4tMdnQWz9Vy19kbICoSi4+dwsN0rW+psaKYHnDYgPbe3UdP2RDHPjANtfHkidl12Pgkzvkc0hrmgNJ0vW9B08Vc01ZjeVbPaO0NpVpXEBAQEBAQEBB4lrKc1VRu9q52sbbcs83ZMb79Gvzuif/6eHeb5gPDfOm6Li5YxX/68U/WHRp4lfx3j6Sw4Xg0jzqO7bfWz6Dr5/NYYeHZLz8UbQ2ZNZSsdOsrjG8Ja9oDTkLRlBAvQciDv+66WfRUyViI6bdIUsWptSZmeu6BFwSRt5ZRmHTM0/EH+iqRw7LTrW/X82+2spaetVbj+zeHmcTisG1xdvI22OJ2Bc+Mi+lnVWtNfUxfkyRvHqr55xRTnpP5Ne4j2AwriO6bKwc8sgdX/AMjT9V0+Vzp1Nt+z1w3sJhoMmJOIxGZj7az/AAxbmmwHeyfZ67aFaM2SMcdVzTxOfs27hsgfchjsg0TZOXnoD4LDFli9d2ebDOO3Kg8Qb/FTwHN3fdOcQavOCWnLuMujfHdaa5ovfZYthnHjme+7YWRhoNnxs7K2oo0mNznLGASdMztG/Pf+902Gtdq2SYYx5Q6jbi9oGS790NAoHnrvfguRxG+XFFYwxMR7Oxw3Fiy805ZiZ9JWUPal8bWtmgdmoW4nKHab6ir8AtdeJ5KRFctOv3+jkZbVjJbljpv0VX8Q2625+0HCh1str5rXXUxe20Q211MecJM0Dme80jz2PkdirU1mO8LMWieyLivdPp9VEJhiwGAkmNRtJ6nZo8z/AGVspSbdi14r3bXwrs3HFTn/AOI/x90eTefmfkrePBWvfqq3zTbsvFvaRAQEBAQEBAQEBAQEBBEfG4vNOLQQCdvLn5LLeNmqYnm6Sx4nhoePfcXDUWdLHh0SLbIti5o7o7eHvPIDxu1nzw1Rhs9zcIDm1m1smyNNQARXoFWz4/FXtLecG/nu84Hhbo2yNLwQ4aDWgddfp8Fqx4JpWY37t+XURe0TEdmHA8DIeHSFpAumtvc8ySscWmmtuaZZ5tVF6ctYTn8LYSLLso1y3patqQ7hzSd6FjQDpyRGySMO38oRL6+BrhlLWlvQgV8FhelbxtaN4ECHgcUbw+PPHRvK1xDD1BadKK0Y9Hjx25qbx+fT9EbQsnC9DqrKUDEcFhfuyutEgH0C1zhpM77NkZbR5psMTWANa0ADYAUFsiIjpDCZ37valAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP//Z"
                alt="logo"
                className="logo"
              />
              <h3 className="number">NaN</h3>
            </div>

            <div className="box">
              <p className="text">Major Used Bin</p>
              <img
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQufzYv0rJxrkexNVf15qrRxw_8tOBsf9IQ8A&s"
               alt="logo"
                className="logo"
              />
              <h3 className="number">Swing Lid Bin(50.0%)</h3>
            </div>
          </div>
        </section>

        <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />
       
       <div className="row d-flex justify-content-center  ">
          <h1 className="surveyy d-flex justify-content-center mt-1">TRENDS</h1>
          <hr className="w-75" />
        </div>

        <section id="trend">
          <div className="charts-container">
            <iframe
              className="chart-box-wide"
              src="/chart_a.html"
              title="Colab Chart"
            ></iframe>

            <iframe
              className="chart-box"
              src="/chart_b.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_c.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box-wide"
              src="/chart_d.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_e.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_f.html"
              title="Colab Chart"
            ></iframe>
            <iframe
              className="chart-box"
              src="/chart_g.html"
              title="Colab Chart"
            ></iframe>
           
          </div>
        </section>

        <hr className="w-100 my-5 bg-dark" style={{ height: "3px" }} />

          <footer className="footer mt-5">
  <div className="footer-section about">
    <h3>Submitted By</h3>
  
    <ul>
      <li>Eakamjot Singh-22303062</li>
      <li>Gautam Sharma-22303066</li>
      <li>Gurvansh Singh-22303076</li>
    </ul>
  </div>

  <div className="footer-section contact">
    <h3>Contact</h3>
    <p>Email: gautamsharma5144@gmail.com</p>
    <p>Email: gurvanshsingh917@gmail.com</p>
    <p>Email: eakamjot10@gmail.com</p>
   
  </div>

  <div className="footer-section resources">
    <h3>Resources</h3>
    <ul>
       <li><a href="https://github.com/Gautamdevgsp/waste-management-survey-and-analysis">GitHub Repo</a></li>
      <li><a href="https://react.dev/">Documentation</a></li>
      <li><a href="https://colab.research.google.com/drive/1AdGL85msPQCV2CLOk256VVScwLtEhTiY?usp=sharing">Colab</a></li>
    </ul>
  </div>
</footer>
      </div>
    </div>
  );
}

export default Dept;
