import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Line from '../../components/line';

import ProductItem from './Cart';

function Cart() {
  const data = [
    {
      _id: '63e09b3f5d240411b3c6cedd',
      name: '상품이름',
      price: 1300,
      size: 'Free',
      image:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhIQEhUSEBUPEBUVEA8PEBUPFRUWFhUVFRUYHSggGBolHRUWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0lHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABAEAABAwIEAwYDBQcCBgMAAAABAAIDBBEFEiExQVFhBiJxgZGhE7HBIzJS4fAHFEJiotHxcoJTY5Kys8IkNEP/xAAbAQACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADMRAAIBAwMBBAoBBAMAAAAAAAABAgMRIQQSMUEiMlGhBRNhcYGRscHh8EIGI2LxUnLR/9oADAMBAAIRAxEAPwDzeXFglirwdwghNlNDMg2oVYPNLXclDLSNKHtn5KwyoKjaRYilogqU1HZG2uuo3xXXXO4M48EJA5EayjPJDnsIRBI2XYmu3YTsVosZj2cvPuz1TklHXRelVAD4r9LpUlktUpYsCqtuaM+C8/qW2cR1XoVPqwhYjFosspCKIuqs3KbXKWN9tVHlTS5GKCjKm4sjOGQAarP4TFmd4LYUFG52g0A3PXkOaTUko8vAXq6laSp043k+g8lK16Mw4e0DRtyLXvd2vgr400AHLS/yVOWtj0X2Nil/TNRq9Sol7Er+bcfv8TLSPKiLlri4728FXlw2OS4c0bbtOV1/qohrYvmPn/oOt/TUoxvTqpvwcbeacvoZKSVRvrQEQxfsrOLuhJkG5adH+XB3seizApnXIdcEbgggjxBV2FSMleLMCvoqlCW2orPyfuaJavESdkInlJVmpbYqs5HyCopFe65wTnNSOU2DGAJ+RLGFOGKGziDKmOYrzI10sOiHcRfIODbK7TPuqkqtYeNRfmmMZFlh8J5FWaeO1ijD2tyDwQuZ4sUFxklZEUlXqlQyR2q5QIsRly5gUwiTmxoyLkYJCmEyd8MJPhKdxFxI6shXYsSHFUHwqs+JRySmg3JXMPJUKkNdshxalY4qWgkkL90gjgbr0XAsSDogCeCwDWZkUo3losCoeQlPbk07a1rSQszjQzvuE9zidUi5KwDquQNfGVVLCjmQJn7uCQBuTp4qSFK5L2WpXOcf6l6JTQWYABt4IbhVG2JrWDjqTxzcSVdjqw02vu4e++6xtRW9bLHCPd+jvRq0lO778ufZ/ivZ4vq/ZYuxAkgHbccP1wU7ot9lMYRodjt6LnN3SNpbdS7wRRx38lKyMD/Kcw2+vglP+fBQgHJskB02QrHMLZM3UBslu4+xvYX0dzCvfFH9XpuqtTMSNNDbNffmD7JsZWd0Knp41YuE1dM8oxBpa5zXCzmktcOoVG60vbqlyytkGz2lp/1sO/oR/wBKy11sU3eKZ4nUUHQqyp+D/K8rD1zmLmhT30RiCvENVba1VQdVahKFkMe0KRzbhcFI0JTAA9W2xTaeS3qr9bChrBY2Tou6GxZqYJczfJD6ptrothFNdgPRC8UNnW6oUWJ8IGkLk9cpFWED0vxFXzrs6MTYsCRPEiq5kocoOsWsyje1NY5OBUEFeRqjyq1IUlOy5RJhk9LEroYomsspwVKFyZHsuLkrlDICoOSuPLkW7PU+d+YjRujf9R/JADKtvgtPkYxp33dzzHgVV1dTbTt1f6za9BaX1uqUmsQz8ennn4F2a7R8uSETV3e11P16InXtu3b6aLM1rtTpb391nUo7j3k5KEdx6jRzB8bH/iaHeo2Veeax1/wgnYyuzQujcdY3WGuuR2o9w5W8TqAD043XTTTsUKMVJhBkmp5J7pfy9rXQ2grA+1uLLg9QSD8lPUSW+Xlsl2GerzYZJNqfTp+tSoHVAPXw8FUqn8tfmE2kiJ3539OvkUaRYcEkUu1NJ8SA8Cz7VvPujX1BKwXwV6nIf4SBbKQdNLm1/ZeeFliRyJHpotLSyvGx4v0/TUasai/kmvl+GUREU/4RVqyRWjAuVDCnxNsrFkxzwFDVyUyQKRiqicKYPQOFzrEsjbhCJmWciYkVWpZcoY4ZMeTaYCAYfJZPG3falajszMPh26IHjtF9oSiXJbqvspggDouWpwzDwY2lcpuCYi6UKFPajsJsPUrVEQuD1FiC01KVWEqcJl1iVEVxUtLLZQOTQpZwQkrQuFYh9krTZQdtCDKrUXRkQBzfJZR8iPYHWXGUqGuoymkmNoqAumY3hcuPg0X+i3MDQTpy8EPw2nGZ7+TLDxP+ETpYll6yV5W8D2PoKioUHP8A5P6Y+tyrW3sdbclnapmpstTXRXFj68VmatliQL6b33vxS6LNbUXcGkXezE/w5tdn3jPje7T6gDzWkxOO4va9ljbWaB5+q2GC4gJ4g4nvDuSf6hx8xr5p9WDtuMLQa7dqKlJ9Hj4Ya+D+/gWux1I15kDs5IytAaLu7z7F1idhcEnkCq2NExSmNx14bi4OxAKu4G1sdS0EuDXEROIJabO0Bv4uRftj2WMkbXQnM+Jpy3Pec293NPXcjzQQp74troXZ6tUNZ232KiXuT48+vvuZmOnzbcva6IMpg1tra7Dw3QzDqqws7e/UWReOrAaTvwaNyTb24pSyW682ijUx5Wk6b6jc6fkF5w1pOvPX1W3xquLYZHD/AIfpc2+qwDsQC0dMmkzyXp2blOEV0Tfzt/55ljKlDeaoOr1DJWEqyYWxlypqAFQM11C5xO64Lg9qRKDqrcb1TUjHqGcXAVeoabOhjHIjhspDtEO0hc2C2GwGN5A2KIYnShw8lDRuu5EXnZC3kuwh2bMq4VCRGB1K5TfvDRouXBbUeZWStSgLrJ5TJEzIuuuDlzIGujSMYpC5JdRck4pLqRQvKjk6x2ZOIUTSrAUhEeRLDKWOuFLZRZFxKR6B2fmzQh/4nEeTNPndaClZZv6uUA7K0/8A8eHq1x06yGy1DGCwHL0WHqn237z3mgW3S01/in88/crTNPED+2qzWKsGZtuZutdMyzdOKy+IR94k+A/JRS5LFSf9tsDYk/K3yVTs7jJgmzG+R/dlG/dvo4dR8iV2NTcEKhatdRW2zPndGrOElVj3r3+J65UStNje4ta4212PyXqGCubJDG465o25jxz2Fz6rwrsniOZnwH7gdw/y8vEcOngvUOxtY4QuYSPsXlpuR9x3eaeguXDpZV9P/bquL6o9Drqi1WjhVh0fyvyvg0gljfZiCV2d7O9tnacr/O2/mCgc3ZsNaTHLmDR3Q9u+h0JA38lsxU3a6+hA1GxQ+lk+8Cb5ruGxIPFtlYqQpuXBnUdRqIwspOy6cr5M8i7b0Iio5G7n4kV/N1x7ArzUNXqX7Undxw/HLG422sGvA+QXmjWpsbWxwUqzk5tyeWQ/BKYYyrzSEyZwUiblMBOLVG56c166xNhwKe0qNyaCoBsWg9TQVBBVJSMUM61jbYHEX2KI1fdVDsnVAgBFMZCS3kvR7qYBqqnvFcqksRJvZcjF3MzdJdIE6yYVRqWy66VQcNXWSpC5ccLdQvKkJXCIlEiRrSpY05lOrDIVLOckNay6f8OymDbKN5Q9QHLDPS8NpwxsTPwxtB8ePujDG6hUaJt3H+WwRINtryWDUd2fRrKMVFdEV5x+fgsxiwIJvwBPmtPUi1/c/M/NZbHnd155MPj0/XRMoLtAah/2Ze5/QxFbLmcpKaJQxNuUTpolqt2R8+6EtM0gggkEG4I3BXp/7P8AEy98hNg4MDiOBy6bcjf2KwENOd0SwGvEFXTuJs0yCN/LLJ3NeneB8lGy9n1Q2hqZU90f4y5+z968z1OZ9+9GTZpBDdx8J1wB0sQRbkWqxUNDC2SMiwyvJI0LCCLHr/YIDR1+QuJ+7A9zZBtenvZx/wBtg/8A2HmiuJsEbHchcGxuCx13MPhe/sqkH2b/ALc9DVhaez9af75mW/aXhueOSw1yOcOfxGXkaB42cPNeJfFX0P2tmzwtfY5crJNRfYgkEjoSPNfP+LUzYppI2OzNY8tF9wWmxB8CD7K/TfJiaiNrNlUzJr5SUwppKaVxzUpXRp8gUEnNckcowVKFzBY5hUjVC1TsB5IWQaLspJ37dVqsZ+7fost2ViOY+K1WLs7nkkS5LVLuAekk7u3FKqEFXYEX4lcjOuY8OUzXXSOCdGAmsroRzCmEq9pZVJWLkS4kTnJYoyU3IiNLHopAbshkVMrDYgFMushFNsjypQFJlTbLgbjHFQucL+aWZyrSPXILoz2LDm3ueFzZEtlUwYfZMP8Ay2+uW5VyQHhx19lgzWT6K5bijVu35C/j1WR7T/cmtyHzatRXSEew6rOz0ElQ4wsAzyaC5sNDc6+DSn6ZdoVr8aaX/V/QymHQ3IRnI1ouic/Z+OlbeeYOk4RRanzcdvRZyqqw69hl6Xv7rS2Zuzwu3xLdRjDWiyBV+JF2x13HjwVOcXJTQ1NsConteH1odIZAAWy9+3NsgDrejkdw52elfFrnpw+lJN+9E0B8JPXI5gvzBXnvYyqzwx84/sT5Wyf0kei2FFiIjqXRk/8A2acafzxtlBd4kOYPJZ6W2Uo/uPweqm1UpU6q6W+T/IZmja6hs8t7pMfTvHK0epHqvBO2VMWVcmls+WXzc0Zv6g5fQUM7RC9jXBwzEEgg626eS8U/aRTZZo3c2OYeOzsw/wDIfRWNPLhewzNbT7z6Xv8AP/aMZZMKlITMqtmWIE/MnxwEp5hshbRFysQnMUuULmt1HiuudcI01IMtz4pvxWhEZY/s9PwoAEIcsGz7HuBJ8VqsYZ3D4LLdhm/Na7FPunwSZclin3Ty+tJzu8UqJVFMMx8UiZcVtM/NGq+Yq6/VU3tTEKHteUrimNTnMNlwR0WpROKI22QyjHeF1poAMqGWBUlcphqXKp3s1TXhcV2yLKq1TPZPmmAQ2Z11wcI+I2SUlMN09jESwvB5Z3ZYo3P4Egd0eJ2CLCHWbwlk9dwltoYgd/hMv45RdWpPyThEBYDa1hr0soZSsCTu7nvorNkVapl7DwI+X0Q7C4j++Qi5F3kXBtYFrhof1uij27/rSyowSZauncf+OzhwLgLe6sad2kgNWr0WvY/oaKXAowT8OlbIb6ufmeb+agfgz9jRwAH+WP6rXTTHbZV3A8SVpvLxfyPMwVl3YrzMdV9h4ZPvQQtPNpyO9WrO1/7MDe8UuUcnDN6EWXpNRVhvL5lD5cW4AX8lzlt6keoVTO3ysYvA+zMtIXZ3Nc17mltgRZzb3vfpb0VfHccENdEcrXiOEtI2ymQ7jk4Ae/VanGsQEcYlkvZrr5Ra/wB1xtbyXjdRVOke+VxN3vuePlfoCB5JcaW6o5Pi31HVa6o6eNOHN7+6zv8AXg0GD9rZKcBgN43OD3t34963UjRBO0mLOqZDIdASLDgLN/Mocj3ZjABVmVpk+GWMD2mwILnEix9CrLSvutkzFKbiqaePAzbYiVPHCBujGNdm6mmuXMzs/Gy7m268QgDpSVGRNmEg9oCHVEmqiueaQgqFCzIURcydGbkDqmhhRTA6PM7mpdiVG7sG2RfY68llnnU+K3FXBZmUcllq7DS3vIUNqo1vYaPugo9iMu4Qzsgy0Y8EuJVGpSZcj44igNW2zlchldU98rkVhbeQY0Ep7KAk8ksLrbp8mIBqaIVupJFQtG6vimZZApK9ztk+mqHk2XZD3pBA0QBuE+F9jZPjvbVQShT0Ksp3kW6icAXQqervsnS3KjbCoSJsiB1zulbGToBflxN1P8Nejdjuy4jAnmHe3Y0/w32v1QVKigrst6bTT1E9seOr8P3oDezXYa+WSpuL6iIb2/nP0XpuEUbGRvyhrQ0G9gANBsqJdwGl/krzZiIy0aANPm4i31VBVnKd2ejWjhSp7IdeX1BljfXoVBUfNWAfooJNTY8/mAqZqxeRjGc+VkBqiRURHb7aO3gHDX1+S0Lht7IDiws+N3J4d6OFk2l3iKmYM9PqJWtvr/dCarEeAKFVWLgm256aqOOqvsCPRbCqJ8M8t6iSXaRcc8Hl6FUqh7m6jKPLT5qUzAbkIZXyNcbAD3CXVlZclrTU90rNO3z+tkCu1Nbmp3i4PG4BGuVw+q8zfsB4n1NvovQu09NlpZHf3PNYGojs8N/C1o88gv7ldpm3HPiI9KRgqiUOLEYC3n7P4Wtike6/2jw0HfusB+rneixTIHPc2Ngu5zgxo5uOy9gw3CWRRRxWvkYG3uQSRu7zNz5qNQ+zZdQPR0E6jm07JdPF/i5IxoI7sjT/ACu4+RWQ7S9iM5MkDWxOOrm//m48x+EraxwNb1HIgH3VuGMfw28LkfklUpPx8/sXdTSjLlX+Fn8190zwiqwmaIkSRubY2vbu+R2UIgXvVRCw6PYPMAhAcR7I0st8o+E7m3b02VpSv1yY1bSzjlcfvVYPIjGjvZSG7nFX8a7HTw3cB8RnNu9uoS9l4bX8VzZXppqaTCuIM1A6KvXUWZis4g7vIjSwZmqEWpK5XwuPJHbkFnMWq9StLiMgY2ywOKzXJQWydN2RRqZruJXKDMuTSvuCMkSHTR6rQOgVCqgshjIVFvhlJkSI0FOqTQSbI1SR2CO5FR4HEKNzbqZwTQEQpEHwlHIFYlWg7G4H8V/xZBdjD3Rwc8fQJdSahHcx+noSr1FCPL8l4/vu5aLPYrswS4Tyt0HejaRrfg4/Rbx8XAbDfxRLD6PuZrWB+Sq1ko2bsNzzKzql5dqT5PV6aEKS9XT6cv2+LKThZK+oGUgcbX9b/RNcR4nkFFUcBa19foPmkLHBfSTauLGPl7qJ7deFvqpDt+t1Een6CWNXIkrvLUW6BAcZH/de3+0W8kaqN9Nb/mg2MtAseQA8vu/rwTKXeCmuwTl/L+yc2U8/dUIrm2qsxs52+StXM+3iTlxO/wDZT0tMCdwPFNhYOV/NW7NtoLeS618sjfZWQI7X096ZzA4HM5jOJ+8631XmspDpZXcA429dPYL03F2ExvABuBnbbfM05hb0XneG4TLKcjQbud3nW7rW8yee5t1Cs0JLazK9I05OpFLLa+5pOweHd796e2+7YRpvs5//AKjzXoNMGv8AuuF+R0KAwMEbWsDbNY0Mb4DRSfEHA2KpS1MnK7WDZpej1Ckoxeer8X+8ewPyUzhuCq74yNRoVXo8ZezR3eHujUFXHILi31Rx9XU4dmIqeto95XXiihDWX7rt10sN9W6fJW6mja7bQqtFE5uh1Caoy4ln2ldzi8xx7COOfgfyQ+rwiMkvjAa7cgbFE6mC4v6qn8Qg2PkUze44n8xE6EZrdD5GLxV5EljoQUaw6cZQreM4a2dvJ7dWnn0Kz9O4sJa7QjQhM6FFw2vIvaKTQrBV79Vr8anu0rFVD7uRREVSHKkTsy5EIDrK4E2Vx8QcLrOSE5kYoajSyCUSSGOAZkRJsFEwXN+KfIEURNRZGl11NGxMjCmYjFjP3Zz3tY0Xc8hrR1K9cwrChDGyIfw2BPM8T6rLdhsIu9tQ/mREPZzvoFuKmfW48vDmqOompY8D0XovTypx3tZkse788k1VVd3I3QDc8zyQuUX2Tybgl3kFTlnLrgaAceZ5eCrN73k16cFTWCOWpymzRd3sPFNj1OtzxJ6KIMAPjxVm9rIGrIfHkdK6+36sqrxt0vqpHcen6soeWux90ksQVhz4tD0FvPZBMVlBB4b32/CidTUd3rqfdAMT2HU+x/JNprtE1LxptsnibsrsbBxVNgKmDj0VuyMxt9C4HAbWHyT21Z5D9dCqzGEqw2G3FC3fgmKS55EdIXcBb0TmxD9FRzxHmVzCbbqvUuXKVrclhtO138Vj1/JV6nD3jUZXeB190nxf0FZiqkCmniSDcJRzFgp0jmmzgfP+6mp6ktOZhtzCJSMDxbRCqmiLDptyUuNsxySqin2ZKzNHRV4eN7FWWz8CsdFUFpuOCPU9SJGg8VYpV21bqZ2p0ii79GGLg9Pkh9TDuCNEtPU8CrMh05jj0VtNSRnSUqcgSAbc7e4QTtFRl7DJH98C9vxDiPFaNzcp5gqtLGOGzvZ3NdtsBU2zVn1PJquuc4EHQ7IS5i2PbPBi0/GYNCftAOB5+CyOZMjwZNSMoytIiyrlNouRXF3J61oBuq7ZiuXLo8BrgMYSboi+NcuRRRWqPJE5tkTwHDjPKyPYH7x6DdcuQVG1FtDtLTjUrQhLhs9QpKQNAaAAGjKLbAKXJc/NKuWbtSwev3PJRrZRbTYC6ET1RIDRpff6BIuQSZboxTeR9OCSOiuHYdEq5BLuhfyIZzfXwUDjy/V1y5LHw4K8rtNfw3HugddcuH65JVydR7wGp7golIU8RJXLlZZnIuwDyKsRyk6JVyXLAxZHiS24VunyHdoPkuXIbktYuTuw+JwuAQfEqhLQgHQrlynamldARqTjJpNlVzsqsRyhwsUi5JTtLBZl2oXZSraS2o2Khopyx3QpVyKSUZqxEZOVNphWQ8Qr+H1GYWKRcrVJ9ozayvTb8Bk+htw4KAi4K5crSKD4IHxhwIIB53WTxrsix93R9w7kDZcuQyxkOEYyajJXTMjLhErDl006hKuXLlJsTPR01JrJ/9k=',
      count: 1,
    },

    {
      _id: '63e0aa360cf5b0896a027376',
      name: '상품명',
      price: 1100,
      size: 'Free',
      image:
        'data:image/jpeg;base64,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',
      count: 1,
    },

    {
      _id: '63e09d365d240411b3c6ceff',
      name: '상품 20',
      price: 12000,
      size: 'Free',
      image:
        'data:image/jpeg;base64,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',
      count: 1,
    },
  ];
  localStorage.setItem('cart', JSON.stringify(data));

  const [productList, setProductList] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkItems, setCheckItems] = useState([]);

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      productList.forEach(el => idArray.push(el._id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const deleteAll = () => {
    setProductList([]);
  };

  const handleOrder = () => {
    // axios.post(
    //   "http://localhost:5001/order",
    //   productList.filter((product) => checkItems.includes(product._id))
    // );
    console.log(
      '주문내역',
      productList.filter(product => checkItems.includes(product._id))
    );
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(productList));
    let count = 0;
    let price = 0;
    productList.forEach(product => {
      if (checkItems.includes(product._id)) {
        count += product.count;
        price += product.price * product.count;
      }
    });
    setTotalCount(count);
    setTotalPrice(price);
  }, [productList, checkItems]);
  return (
    <Container>
      <MainDiv>
        <Title>장바구니</Title>
        <Main>
          <Info>
            <Item>
              <Checkbox
                type="checkbox"
                checked={checkItems.length === productList.length}
                onChange={e => {
                  handleAllCheck(e.target.checked);
                }}
              />
            </Item>
            <Item>상품사진</Item>
            <Item>상품명</Item>
            <Item>수량</Item>
            <Item>사이즈</Item>
            <Item>가격</Item>
            <Item>삭제</Item>
          </Info>
          {productList.map(({ _id, name, price, size, count, image }) => (
            <ProductItem
              key={_id}
              name={name}
              id={_id}
              price={price}
              image={image}
              size={size}
              count={count}
              setProductList={setProductList}
              setCheckItems={setCheckItems}
              checkItems={checkItems}
            />
          ))}
          <Line widthLength="95%" />
          <TotalContainer>
            <TotalCount>총 {totalCount}개</TotalCount>
            <TotalPrice>
              {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} KRW
            </TotalPrice>
          </TotalContainer>
          <ButtonWrapper>
            <DeleteButton
              disabled={productList.length === 0}
              onClick={deleteAll}
            >
              전체 삭제
            </DeleteButton>
            <OrderButton
              disabled={checkItems.length === 0}
              onClick={handleOrder}
            >
              주문하기
            </OrderButton>
          </ButtonWrapper>
        </Main>
      </MainDiv>
    </Container>
  );
}

const Container = styled.div`
  margin: 70px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainDiv = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 25px;
  padding: 0px 30px;
  font-weight: 600;
  margin-bottom: 25px;
  align-self: flex-start;
`;

const Main = styled.div`
  width: 1000px;
  min-height: 500px;
  position: relative;
  background-color: #efefef;
  border-radius: 12px;
`;

const Checkbox = styled.input`
  zoom: 1.5;
`;

const Info = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 120px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: rgba(153, 164, 151, 1);
  margin-bottom: 20px;
`;
const Item = styled.li`
  font-size: 20px;
  font-weight: 600;
  width: 140px;
  text-align: center;
`;

const TotalContainer = styled.div`
  width: 90%;
  display: flex;
  margin: 30px auto;
  font-size: 20px;
  font-weight: 500;
`;

const TotalCount = styled.span`
  margin-right: auto;
`;
const TotalPrice = styled.span`
  margin-left: auto;
`;

const ButtonWrapper = styled.div`
  margin: 20px auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const OrderButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: rgba(153, 164, 151, 1);
  color: rgb(59, 59, 59);
  &:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;

const DeleteButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  background-color: rgba(153, 164, 151, 1);
  color: rgb(59, 59, 59);
  &:hover {
    cursor: pointer;
    background-color: gray;
    color: white;
  }
`;

export default Cart;
