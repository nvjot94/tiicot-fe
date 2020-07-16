import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UsersList from '../../components/users/UserList';


let container = null;
beforeEach(() => {
	// setup a DOM element as a render target
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	// cleanup on exiting
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders equal number of users as situated in props', () => {
	const users = [{
        id:'1',
        name:'navjot',
        lastName:"singh"
    },{
        id:'2',
        name:'Kevin',
        lastName:"Hunt"
    },{
        id:'3',
        name:'Abhishek',
        lastName:"Singh"
    }];
	act(() => {
		render(
			
				<UsersList users={users} />,
			container
		);
	});
	expect(container.querySelectorAll('[data-testid="user-item"]').length).toEqual(users.length);
});