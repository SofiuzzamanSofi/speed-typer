

blog = () => {
    // const blogggg = document.getElementById('blog-er-kaj');
    // blogggg.classList.remove('d-none')
    const cardShowContainer = document.getElementById('card-show-container');
    cardShowContainer.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
         <div class="border text-center m-2 p-3 bg-rose-600	text-white rounded-md ">
                <h2 class="text-3xl pb-3">Differences between Local Storage and Session Storage.</h2>
                <p><span class="text-bold">Local Storage:</span> This read-only interface property provides access to the Document’s local storage object, the stored data is stored across browser sessions.
                
                <p><span class="text-bold">Session Storage:</span> Session Storage objects can be accessed using the sessionStorage read-only property.</p>
                <p>The difference between sessionStorage and localStorage is that localStorage data does not expire, whereas sessionStorage data is cleared when the page session ends. Local Storage capacity is 10mb, where Session Storage capacity is  5mb.</p>

            </p> 
        </div>
        <div class="border text-center m-2 p-3 bg-rose-600	text-white rounded-md">
            <h2  class="text-3xl pb-3">Difference between Global scope vs Block Scope  </h2>
            <p>We often identify those scopes as local scopes and identify the top-level scope as the global scope. In a browser environment, the global scope is controlled by the window object while in Node.js, it’s controlled by the global object. When we declare a variable with "var" ii,s behave like a global scope. When we declar a variable with "let" or "const" in any function its behave like block scope. Global scopes variable is called by anywhere any ups or down from javascript pages, where block scopes variable is not get it's are out.
            </p>
        </div>
        <div class="border text-center m-2 p-3 bg-rose-600	text-white rounded-md">
            <h2 class="text-3xl pb-3"> How JavaScript's event loop works.</h2>
            <p>Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them. <br>
            Event handlers can be used to handle and verify user input, user actions, and browser actions: Things that should be done every time a page loads. Things that should be done when the page is closed. Action that should be performed when a user clicks a button/ like button html element. keyup,keypress,keydown,stop,start etc. there are many work do enent handeler work. 
            </p>
        </div>
        <div class="border text-center m-2 p-3 bg-rose-600	text-white rounded-md">
            <h2 class="text-3xl pb-3">How many ways to get Undefined.</h2>
            <p>The main difference between forEach and filter is that forEach just loop over the array and executes
                the
                callback but filter executes the callback and check its return value. If the value is true element
                remains
                in the resulting array but if the return value is false the element will be removed for the
                resulting
                array.
            </p>
        </div>
    </div>
                     `;
    cardShowContainer.appendChild(div);

};

blog();