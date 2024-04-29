import React from 'react';
import {Link} from 'react-router-dom';

const Usertest = () => {
    return (

        <form className="quizformuser">
            <h1 className='h1className'>User Test</h1>
            <h2 className="h2className">Question 1</h2>
            <p>What is the largest unit of data storage?</p>
            <label className='labelclassName'>
                <input type="radio" name="q1" value="a" />
                a. Megabyte
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q1" value="b" />
                b. Kilobyte
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q1" value="c" />
                c. Gigabyte
            </label>

            <h2 className="h2className">Question 2</h2>
            <p>What is the name of the programming language developed by Microsoft?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. Java
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. C#
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. Python
            </label>

            <h2 className="h2className">Question 3</h2>
            <p>How do you start writing a for loop in Python?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. for x&gt;y
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. for x in y
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. for(x)
            </label>

            <h2 className="h2className">Question 4</h2>
            <p>Which collection is ordered, changeable, and allows duplicate members?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. Tuple
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. List
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. Map
            </label>

            <h2 className="h2className">Question 5</h2>
            <p>Which of these collections defines a TUPLE?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. {"{"}apple,{" "}banana,{" "}cherry{"}"}
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. {"{"}{"name"}:{"apple"},{" "}{"type"}:{"fruit"}{"}"}
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. {"{"}apple,{" "}banana:{"fruit"}{"}"}
            </label>

            <h2 className="h2className">Question 6</h2>
            <p>Which method can be used to replace parts of a string?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. switch()
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. replace()
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. swap()
            </label>

            <h2 className="h2className">Question 7</h2>
            <p>What is a correct syntax to return the first character in a string?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. x = "Hello".sub(0,1)
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. x = "Hello"[0]
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. x = "Hello[0]"
            </label>
            <h2 className="h2className">Question 8</h2>
            <p>What is the correct way to create a function in Python?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. create myFunction()
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. def myFunction()
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. myFunction()
            </label>

            <h2 className="h2className">Question 9</h2>
            <p>What is the name of the programming language developed by Microsoft?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. Java
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. C#
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. Python
            </label>

            <h2 className="h2className">Question 10</h2>
            <p>How do you start writing a for loop in Python?</p>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="a" />
                a. for x&gt;y
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="b" />
                b. for x in y
            </label>
            <label className='labelclassName'>
                <input type="radio" name="q2" value="c" />
                c. for(x)
            </label>
            <br></br>
            <br></br>
            <Link to="/thankstestpage" class="buttonusertest">Submit</Link>

        </form>
    );
}

export default Usertest;