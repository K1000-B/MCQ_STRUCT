import type { Question } from '../types'

export const questions: Question[] = [
  {
    id: 1,
    prompt:
      'A structure is modeled using finite elements. It is unconstrained and subjected to a set of loads in self equilibrium. The solution of the linear static problem:',
    multiple: false,
    answers: [
      { key: 'a', text: 'can be obtained after constraining the structure isostatically', correct: false },
      {
        key: 'b',
        text: 'is defined up to a rigid body motion; thus, not being unique, can never be obtained',
        correct: true
      },
      { key: 'c', text: 'is stress-free', correct: false },
      { key: 'd', text: 'can be obtained only if the loads are concentrated', correct: false }
    ]
  },
  {
    id: 2,
    prompt:
      'Consider a truss fixed at one end and free the other, and loaded with a uniformly distributed traction. The finite element solution obtained with quadratic elements:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is an approximation of the exact solution', correct: false },
      { key: 'b', text: 'is exact for both displacement and axial force', correct: true },
      { key: 'c', text: 'is exact for the displacement, but approximated for the axial force', correct: false },
      { key: 'd', text: 'is exact for the axial force, but approximated for the displacement', correct: false },
      {
        key: 'e',
        text: 'is exact for the displacement and strain, but approximated for the axial force',
        correct: false
      }
    ]
  },
  {
    id: 3,
    prompt: 'The torsional stiffness of a single-cell thin-walled beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is zero according to the semi-monocoque approximation', correct: false },
      { key: 'b', text: 'requires first the shear center position to be evaluated', correct: false },
      { key: 'c', text: "can be evaluated using the Bredt's formula", correct: true },
      { key: 'd', text: "can be evaluated using Eulero's formula", correct: false }
    ]
  },
  {
    id: 4,
    prompt: 'The elastic problem can be formulated in terms of displacements:',
    multiple: false,
    answers: [
      { key: 'a', text: 'Always', correct: true },
      { key: 'b', text: 'Only for linear elastic materials', correct: false },
      { key: 'c', text: 'Only if stresses are known a priori', correct: false },
      { key: 'd', text: 'Only for statically determinate structures', correct: false }
    ]
  },
  {
    id: 5,
    prompt:
      'The shear center of open section thin-walled beam section modeled according to the semi-monocoque scheme can be determined by:',
    multiple: false,
    answers: [
      { key: 'a', text: 'imposing the equivalence of torsional moment', correct: true },
      { key: 'b', text: 'imposing zero bending moment', correct: false },
      { key: 'c', text: 'minimizing shear deformation energy', correct: false },
      { key: 'd', text: 'imposing uniform shear stress distribution', correct: false }
    ]
  },
  {
    id: 6,
    prompt: 'The Timoshenko beam model:',
    multiple: false,
    answers: [
      { key: 'a', text: 'accounts for shear deformability', correct: true },
      { key: 'b', text: 'neglects rotational inertia', correct: false },
      { key: 'c', text: 'is valid only for slender beams', correct: false },
      { key: 'd', text: 'assumes zero shear strain', correct: false }
    ]
  },
  {
    id: 7,
    prompt: 'The equivalence between the Principle of Virtual Works and the Principle of Minimum Potential Energy:',
    multiple: false,
    answers: [
      { key: 'a', text: 'holds for hyperelastic material law', correct: true },
      { key: 'b', text: 'holds only for linear kinematics', correct: false },
      { key: 'c', text: 'is valid only for statically determinate systems', correct: false },
      { key: 'd', text: 'holds only in the absence of body forces', correct: false }
    ]
  },
  {
    id: 8,
    prompt: 'The shear flows acting on the rib are:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the flows equilibrating the applied load', correct: true },
      { key: 'b', text: 'the flows minimizing strain energy', correct: false },
      { key: 'c', text: 'independent of the applied loads', correct: false },
      { key: 'd', text: 'zero due to the rib rigidity', correct: false }
    ]
  },
  {
    id: 9,
    prompt: 'In finite elements, the hourglass phenomenon:',
    multiple: false,
    answers: [
      { key: 'a', text: 'can be due to an excessively low number of integration points', correct: true },
      { key: 'b', text: 'is caused by excessive mesh refinement', correct: false },
      { key: 'c', text: 'appears only in implicit solvers', correct: false },
      { key: 'd', text: 'is eliminated by increasing material stiffness', correct: false }
    ]
  },
  {
    id: 10,
    prompt: 'The Principle of Virtual Work:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is used to impose the equilibrium', correct: true },
      { key: 'b', text: 'is used to impose the equilibrium and compatibility', correct: false },
      { key: 'c', text: 'is used to impose the compatibility', correct: false }
    ]
  },
  {
    id: 11,
    prompt: 'The shear force in an Euler-Bernoulli beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is null because the shear deformation is negligible', correct: false },
      {
        key: 'b',
        text: 'is different from zero and can be computed from the derivative of the bending moment',
        correct: true
      },
      { key: 'c', text: 'is infinite so that the shear deformation is null', correct: false },
      { key: 'd', text: 'cannot be computed', correct: false }
    ]
  },
  {
    id: 12,
    prompt: 'In a thin-walled beam, a rib contributes to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'preserve the shape of the section', correct: true },
      { key: 'b', text: 'reduce the shear flows in the panels', correct: false },
      { key: 'c', text: 'reduce the force carried by the stringers', correct: false }
    ]
  },
  {
    id: 13,
    prompt: 'The shear flux in a thin panel is equal to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the shear stress divided by the panel thickness', correct: false },
      { key: 'b', text: 'the shear stress multiplied by the panel thickness', correct: true },
      { key: 'c', text: 'the shear stress', correct: false },
      { key: 'd', text: 'the derivative of the axial stress in the panel', correct: false },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 14,
    prompt: 'The critical buckling compression force for the Euler instability of a beam is function of:',
    multiple: false,
    answers: [
      { key: 'a', text: 'only the beam length and the constraints', correct: false },
      { key: 'b', text: 'only the beam bending stiffness and the constraints', correct: false },
      { key: 'c', text: 'only the beam torsional stiffness and the constraints', correct: false },
      { key: 'd', text: 'only the beam axial stiffness and the constraints', correct: false },
      { key: 'e', text: 'the beam length, the axial stiffness and the constraints', correct: false },
      { key: 'f', text: 'the beam length, the bending stiffness and the constraints', correct: true },
      { key: 'g', text: 'the beam length, the bending stiffness, the cross-section area and the constraints', correct: false },
      { key: 'h', text: 'the beam length, the torsional stiffness and the constraints', correct: false },
      { key: 'i', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 15,
    prompt: 'The axial stiffness for a thin-walled beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is null', correct: false },
      { key: 'b', text: 'is generally larger with respect to a corresponding compact section', correct: false },
      { key: 'c', text: 'is generally smaller with respect to a corresponding compact section', correct: false },
      { key: 'd', text: 'is equal to that of a corresponding compact section', correct: true },
      { key: 'e', text: 'can be neglected', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 16,
    prompt: 'In the finite element method, the analysis of a statically indetermined structure:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is done with no differences with the case of a statically determined one', correct: false },
      { key: 'b', text: 'requires special compatibility requirements to be added to the solving equations', correct: true },
      { key: 'c', text: 'cannot be performed due to the overconstraints', correct: false }
    ]
  },
  {
    id: 17,
    prompt: 'The rotation of a multi-cell thin walled cross section with N cells:',
    multiple: false,
    answers: [
      { key: 'a', text: "can be computed using Bredt's formula", correct: false },
      {
        key: 'b',
        text: 'can be computed by solving a system of equations with N-1 compatibility equations and 1 equilibrium equation',
        correct: true
      },
      { key: 'c', text: 'can be computed by finding the location of the shear center', correct: false }
    ]
  },
  {
    id: 18,
    prompt: 'The buckling load of a compressed beam is function:',
    multiple: false,
    answers: [
      { key: 'a', text: 'of the cross-section bending stiffness', correct: true },
      { key: 'b', text: 'of the cross-section torsional stiffness', correct: false },
      { key: 'c', text: 'of the cross-section axial stiffness', correct: false },
      { key: 'd', text: 'of the cross-section shear stiffness', correct: false }
    ]
  },
  {
    id: 19,
    prompt: 'The semi-inverse approach for the De Saint Venant solution for isotropic, homogeneous beams:',
    multiple: false,
    answers: [
      { key: 'a', text: 'leads to the exact solution of the problem', correct: true },
      { key: 'b', text: 'provides only an approximate stress field', correct: false },
      { key: 'c', text: 'is valid only for closed sections', correct: false },
      { key: 'd', text: 'requires numerical discretization', correct: false }
    ]
  },
  {
    id: 20,
    prompt: 'The shear center of beam section with one closed cell:',
    multiple: false,
    answers: [
      { key: 'a', text: "requires application of the compatibility equation theta'=0", correct: true },
      { key: 'b', text: 'coincides with the centroid', correct: false },
      { key: 'c', text: 'depends on bending stiffness only', correct: false },
      { key: 'd', text: 'is undefined for closed sections', correct: false }
    ]
  },
  {
    id: 21,
    prompt: 'The trial functions in the Ritz method:',
    multiple: false,
    answers: [
      { key: 'a', text: 'must be part of a complete set', correct: true },
      { key: 'b', text: 'must satisfy equilibrium equations exactly', correct: false },
      { key: 'c', text: 'must be orthogonal', correct: false },
      { key: 'd', text: 'must satisfy natural boundary conditions only', correct: false }
    ]
  },
  {
    id: 22,
    prompt: 'The solution of the elastic problem:',
    multiple: false,
    answers: [
      { key: 'a', text: 'must guarantee equilibrium and compatibility', correct: true },
      { key: 'b', text: 'must guarantee equilibrium only', correct: false },
      { key: 'c', text: 'must guarantee compatibility only', correct: false },
      { key: 'd', text: 'depends only on boundary conditions', correct: false }
    ]
  },
  {
    id: 23,
    prompt: 'The semi-monocoque approximation provides:',
    multiple: false,
    answers: [
      { key: 'a', text: 'an approximate solution for the shear stresses', correct: true },
      { key: 'b', text: 'an exact solution for torsional stiffness', correct: false },
      { key: 'c', text: 'an exact displacement field', correct: false },
      { key: 'd', text: 'a purely numerical solution', correct: false }
    ]
  },
  {
    id: 24,
    prompt:
      'The linear static response of simply-supported beam with bending stiffness EJ and loaded with a uniform load:',
    multiple: false,
    answers: [
      { key: 'a', text: 'can be analyzed by imposing symmetry conditions', correct: true },
      { key: 'b', text: 'requires nonlinear analysis', correct: false },
      { key: 'c', text: 'cannot be solved analytically', correct: false },
      { key: 'd', text: 'depends on axial stiffness', correct: false }
    ]
  },
  {
    id: 25,
    prompt:
      'Consider a cantilever beam modeled according to Euler-Bernoulli and loaded with a uniformly distributed load. The exact solution is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'polynomial (quartic)', correct: true },
      { key: 'b', text: 'linear', correct: false },
      { key: 'c', text: 'cubic', correct: false },
      { key: 'd', text: 'exponential', correct: false }
    ]
  },
  {
    id: 26,
    prompt: 'A plane-strain constitutive law:',
    multiple: false,
    answers: [
      { key: 'a', text: 'has null axial strain', correct: true },
      { key: 'b', text: 'has null axial stress', correct: false },
      { key: 'c', text: 'is equivalent to plane stress', correct: false },
      { key: 'd', text: 'applies only to thin plates', correct: false }
    ]
  },
  {
    id: 27,
    prompt: 'A two-cell section modeled according to the semi-monocoque scheme can be solved by using:',
    multiple: false,
    answers: [
      {
        key: 'a',
        text: 'shear flow equations, equivalence to internal moment and the compatibility equation',
        correct: true
      },
      { key: 'b', text: 'Bredt’s formula only', correct: false },
      { key: 'c', text: 'Euler-Bernoulli beam theory', correct: false },
      { key: 'd', text: 'pure equilibrium equations', correct: false }
    ]
  },

  // --------------------
  // Added questions 28–50
  // --------------------

  {
    id: 28,
    prompt: 'The shear stress in a thin panel is equal to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the shear flux divided by the panel thickness', correct: true },
      { key: 'b', text: 'the shear flux multiplied by the panel thickness', correct: false },
      { key: 'c', text: 'the shear flux', correct: false },
      { key: 'd', text: 'the derivative of the axial stress in the panel', correct: false },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 29,
    prompt: 'The shear deformability of a thin-walled beam is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'always negligible', correct: false },
      { key: 'b', text: 'always more significant than the bending stiffness', correct: false },
      { key: 'c', text: 'equal to the axial stiffness', correct: false },
      { key: 'd', text: 'equal to the bending stiffness', correct: false },
      { key: 'e', text: 'equal to the torsional stiffness', correct: false },
      { key: 'f', text: 'often not negligible', correct: true },
      { key: 'g', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 30,
    prompt: 'The axial stiffness for a thin-walled beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is null', correct: false },
      { key: 'b', text: 'is generally larger than that of a corresponding compact section', correct: false },
      { key: 'c', text: 'is generally smaller than that of a corresponding compact section', correct: false },
      { key: 'd', text: 'is equal to that of a corresponding compact section', correct: true },
      { key: 'e', text: 'can be neglected', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 31,
    prompt: 'The shear stress transmitted by a glued connection is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'higher at the extremities', correct: false },
      { key: 'b', text: 'lower at the extremities', correct: false },
      { key: 'c', text: 'constant', correct: true },
      { key: 'd', text: 'described by a sin function', correct: false },
      { key: 'e', text: 'described by a cos function', correct: false },
      { key: 'f', text: 'described by a quadratic polynomial function', correct: false },
      { key: 'g', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 32,
    prompt: 'The bearing stress is related to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'glued connections', correct: false },
      { key: 'b', text: 'riveted connections', correct: true },
      {
        key: 'c',
        text: 'the average shear stress in a semi-monocoque cross-section subject to constant torsional moment',
        correct: false
      },
      { key: 'd', text: 'the through-the-thickness shear stress in a Timoshenko shell model', correct: false },
      { key: 'e', text: 'the through-the-thickness shear stress in a Mindlin shell model', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 33,
    prompt: 'The transverse shear deformability for a thin-walled beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is null', correct: false },
      { key: 'b', text: 'is generally larger with respect to a corresponding compact section', correct: true },
      { key: 'c', text: 'is generally smaller with respect to a corresponding compact section', correct: false },
      { key: 'd', text: 'is equal to that of a corresponding compact section', correct: false },
      { key: 'e', text: 'can be neglected', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 34,
    prompt:
      'A truss is fixed at both the ends and is loaded with a uniformly distributed axial load. The axial displacement:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is linear', correct: false },
      { key: 'b', text: 'is quadratic', correct: true },
      { key: 'c', text: 'is cubic', correct: false },
      { key: 'd', text: 'is quartic', correct: false },
      { key: 'e', text: 'is sinusoidal', correct: false },
      { key: 'f', text: 'is exponential', correct: false },
      { key: 'g', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 35,
    prompt: 'The natural boundary conditions associated with the Timoshenko beam model:',
    multiple: false,
    answers: [
      { key: 'a', text: 'involve only axial equilibrium', correct: false },
      { key: 'b', text: 'involve only bending equilibrium', correct: false },
      { key: 'c', text: 'involve shear and bending equilibrium', correct: true },
      { key: 'd', text: 'involve only torsional equilibrium', correct: false },
      { key: 'e', text: 'involve only constitutive relations (no equilibrium)', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 36,
    prompt: 'The transverse shear deformability for a thin-walled beam:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is null', correct: false },
      { key: 'b', text: 'is generally larger with respect to a corresponding compact section', correct: true },
      { key: 'c', text: 'is generally smaller with respect to a corresponding compact section', correct: false },
      { key: 'd', text: 'is equal to that of a corresponding compact section', correct: false },
      { key: 'e', text: 'can be neglected', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 37,
    prompt:
      'Knowing the axial stiffness EA, the two shear stiffness GA*x and GA*y, the torsional stiffness GI and the two bending stiffness EIxx and EIyy:',
    multiple: false,
    answers: [
      { key: 'a', text: 'is enough to fully characterize the behavior of a beam cross section', correct: false },
      {
        key: 'b',
        text: 'is not enough to fully characterize the behavior of a beam cross section, because one needs to know the position of the shear center wrt to the cross section',
        correct: false
      },
      {
        key: 'c',
        text: 'is not enough to fully characterize the behavior of a beam cross section, because one needs to know the position of the beam principal axis wrt to the cross section',
        correct: false
      },
      {
        key: 'd',
        text: 'is not enough to fully characterize the behavior of a beam cross section, because one needs to know the position and orientation of the beam principal axis wrt to the cross section',
        correct: false
      },
      {
        key: 'e',
        text: 'is not enough to fully characterize the behavior of a beam cross section, because one needs to know the position of both the beam principal axis and shear center wrt to the cross section',
        correct: true
      },
      {
        key: 'f',
        text: 'is not enough to fully characterize the behavior of a beam cross section, because one needs to know the position of both the beam principal axis and shear center wrt to the cross section, together with the orientation of the principal axes',
        correct: false
      },
      { key: 'g', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 38,
    prompt:
      'The resultant over the cross section of a beam of the axial normal stress has the dimension of a force. It is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'work conjugated with the axial displacement', correct: false },
      { key: 'b', text: 'work conjugated with the derivative of the axial displacement', correct: true },
      { key: 'c', text: 'work conjugate with the derivative of the axial rotation', correct: false },
      { key: 'd', text: 'work conjugated with the shear deformation', correct: false },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 39,
    prompt: 'A riveted connection between two panels loaded in-plane cannot fail due to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'shear stress in the panels', correct: false },
      { key: 'b', text: 'shear stress in the rivet', correct: false },
      { key: 'c', text: 'axial stress in the rivet', correct: true },
      { key: 'd', text: 'bearing', correct: false },
      { key: 'e', text: 'axial stress in the panels', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 40,
    prompt: 'The PCVW allows to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'find the compatible solution among the equilibrated ones', correct: false },
      { key: 'b', text: 'find the equilibrated solution among the compatible ones', correct: true },
      {
        key: 'c',
        text: 'find the compatible and equilibrated solutions among all the possible independent stress and displacement fields',
        correct: false
      },
      { key: 'd', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 41,
    prompt: 'Shear deformability needs to be accounted for:',
    multiple: false,
    answers: [
      { key: 'a', text: 'never', correct: false },
      { key: 'b', text: 'always', correct: false },
      { key: 'c', text: 'it depends on the beam at hand', correct: true }
    ]
  },
  {
    id: 42,
    prompt: 'When a torsional moment is applied to a thin-walled beam, without any other load:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the shear flows are null', correct: false },
      { key: 'b', text: 'the torsion is null', correct: false },
      { key: 'c', text: 'the torsion is different from zero, but only if the cross-section is free to warp', correct: false },
      { key: 'd', text: 'the torsion is different from zero', correct: true },
      {
        key: 'e',
        text: 'the torsion is different from zero only if the transverse shear deformability is not negligible',
        correct: false
      }
    ]
  },
  {
    id: 43,
    prompt: 'A riveted connection between two panels loaded in-plane cannot fail because of:',
    multiple: false,
    answers: [
      { key: 'a', text: 'shear stress in the panels', correct: false },
      { key: 'b', text: 'shear stress in the rivet', correct: false },
      { key: 'c', text: 'axial stress in the rivet', correct: true },
      { key: 'd', text: 'bearing stress in the rivet', correct: false },
      { key: 'e', text: 'axial stress in the panels', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 44,
    prompt: 'Shear deformability is important for:',
    multiple: false,
    answers: [
      { key: 'a', text: 'slender compact cross-section beams', correct: false },
      { key: 'b', text: 'thin-walled beams', correct: true },
      { key: 'c', text: 'thin panels', correct: false },
      { key: 'd', text: 'any kind of beam', correct: false },
      { key: 'e', text: 'any kind of panel', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 45,
    prompt: 'sigma_zz = E e_zz is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'wrong', correct: false },
      { key: 'b', text: 'correct for plates', correct: false },
      { key: 'c', text: 'correct for a state of axial stress', correct: true },
      { key: 'd', text: 'correct for a state of plane stress', correct: false },
      { key: 'e', text: 'correct for a state of plane strain', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 46,
    prompt: 'The shear flux in a thin wing panel is equal to:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the average shear stress divided by the panel thickness', correct: false },
      { key: 'b', text: 'the average shear stress multiplied by the panel thickness', correct: true },
      { key: 'c', text: 'the average shear stress', correct: false },
      {
        key: 'd',
        text: 'the derivative, with respect to the chord direction, of the axial stress in the panel',
        correct: false
      },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 47,
    prompt: 'A "simply supported" plate has:',
    multiple: false,
    answers: [
      { key: 'a', text: 'vertical displacement and bending rotation prevented on one of its boundary sides', correct: false },
      {
        key: 'b',
        text: 'vertical displacement and bending rotation prevented on all of its boundary sides',
        correct: false
      },
      {
        key: 'c',
        text: 'vertical displacement prevented on two opposite boundary sides, bending rotation left free',
        correct: false
      },
      {
        key: 'd',
        text: 'vertical displacement prevented on all of its boundary sides, bending rotation left free',
        correct: false
      },
      {
        key: 'e',
        text: 'vertical displacement and bending rotation prevented on two opposite boundary sides, vertical displacement prevented and bending rotation left free on the other two',
        correct: true
      },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 48,
    prompt: 'A system of slender beams can be modeled by beams finite elements:',
    multiple: false,
    answers: [
      { key: 'a', text: 'never', correct: false },
      { key: 'b', text: 'if the structure can sustain the loads through an internal axial load path', correct: true },
      { key: 'c', text: 'whenever the shear deformability is negligible', correct: false },
      { key: 'd', text: 'always', correct: false }
    ]
  },
  {
    id: 49,
    prompt:
      'An Euler-Bernoulli cantilever beam with uniform stiffness is clamped at one extremity and loaded with a concentrated force at the tip. The solution obtained using a displacement-based method based on polynomial functions with two unknown coefficients is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'exact', correct: false },
      { key: 'b', text: 'an approximation of the exact solution with errors below 10‰', correct: false },
      {
        key: 'c',
        text: 'an approximation of the exact solution with errors depending on the problem data',
        correct: true
      }
    ]
  },
  {
    id: 50,
    prompt: 'When the shear force is applied at the shear center:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the shear flows are null', correct: false },
      { key: 'b', text: 'the torsion is null', correct: false },
      {
        key: 'c',
        text: 'the torsion can be different from zero only if the torsional moment, computed with respect to the shear center, is not null',
        correct: true
      }
    ]
  },
  // Append these objects after id: 50 (same file)

  {
    id: 51,
    prompt: '"Differential bending" is related to:',
    multiple: false,
    answers: [
      {
        key: 'a',
        text: 'the different bending behavior of beams around the principal axis x and y',
        correct: false
      },
      { key: 'b', text: 'torsional stiffness', correct: false },
      { key: 'c', text: 'interaction between axial and bending stiffness of a beam', correct: false },
      {
        key: 'd',
        text: 'the derivative of the axial stress in the panel of a thin-walled cross-section',
        correct: true
      },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 52,
    prompt: 'The PCVW:',
    multiple: false,
    answers: [
      { key: 'a', text: 'cannot be applied to statically determined systems', correct: false },
      {
        key: 'b',
        text: 'can be applied to statically determined systems, but only in order to compute the reaction forces and moments',
        correct: false
      },
      {
        key: 'c',
        text: 'can be applied to statically determined systems only in order to compute the displacement and/or the rotation of a given point',
        correct: false
      },
      { key: 'd', text: 'is equivalent to the PVW for statically determined systems', correct: true },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 53,
    prompt: 'Hermitian shape functions:',
    multiple: false,
    answers: [
      { key: 'a', text: 'are used to approximate the torsional moment using the Ritz method', correct: false },
      { key: 'b', text: 'are required in order to build Euler-Bernoulli beam FEs', correct: true },
      {
        key: 'c',
        text: 'are special C² shape functions required to build high-performance beam FEs',
        correct: false
      },
      { key: 'd', text: 'need to be avoided because they reduce the order of convergence', correct: false },
      { key: 'e', text: 'are useless', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 54,
    prompt: '"Crippling" is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'a failure mode of thin-walled compressed beam', correct: true },
      { key: 'b', text: 'a failure mode of compact compressed beam', correct: false },
      { key: 'c', text: 'a failure mode affecting the fuselage of Boeing 737 MAX', correct: false },
      { key: 'd', text: 'a failure mode of railways', correct: false },
      { key: 'e', text: 'a special design technique preventing the buckling of beams', correct: false },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 55,
    prompt:
      'Assume that the solution of a given three dimensional elastic problem has a finite H₁₀ norm; an approximated solution, obtained with quadratic finite elements with average dimension h:',
    multiple: false,
    answers: [
      { key: 'a', text: 'has quadratic convergence of the stress with respect to h', correct: false },
      { key: 'b', text: 'has cubic convergence of the stress with respect to h', correct: false },
      { key: 'c', text: 'has linear convergence of the displacements with respect to h', correct: false },
      { key: 'd', text: 'has quadratic convergence of the displacements with respect to h', correct: true },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 56,
    prompt:
      'Let Ψ(x,y) be the warping function for the torsion problem; the torsional stiffness GJ of a beam cross section is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'GJ = ∫ G(x² + y²) dA', correct: false },
      { key: 'b', text: 'none of the above', correct: false },
      { key: 'c', text: 'GJ = ∫ G(x² + y² + Ψ²) dA', correct: false },
      { key: 'd', text: 'none of the above', correct: true }
    ]
  },
  {
    id: 57,
    prompt:
      'When a clamped beam is loaded at its extremity by a shear force whose line of action goes through the shear center:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the shear stress is null', correct: false },
      { key: 'b', text: 'the shear strain is null', correct: false },
      {
        key: 'c',
        text: 'it is not possible to load a beam in that way unless it has a thin-walled open cross-section',
        correct: false
      },
      { key: 'd', text: 'the torsional rotation of the beam is null', correct: true },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 58,
    prompt:
      'An open cross section semi-monocoque beam is clamped at one extremity and loaded by a torsional moment; the torsional rotation angle is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'infinite, because the torsional stiffness is null', correct: false },
      { key: 'b', text: 'polynomial (linear) because of differential bending', correct: false },
      { key: 'c', text: 'polynomial (linear) because of differential torsion', correct: false },
      { key: 'd', text: 'polynomial (quadratic) because of differential bending', correct: false },
      { key: 'e', text: 'polynomial (quadratic) because of differential torsion', correct: false },
      { key: 'f', text: 'polynomial (cubic) because of differential bending', correct: false },
      { key: 'g', text: 'polynomial (cubic) because of differential torsion', correct: true },
      { key: 'h', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 59,
    prompt: 'Isoparametric elements means that:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the stress components have the same value all over the element', correct: false },
      { key: 'b', text: 'the strain components have the same value all over the element', correct: false },
      { key: 'c', text: 'the displacement components have the same value all over the element', correct: false },
      {
        key: 'd',
        text: 'the strain components are interpolated using the same shape functions used for the undeformed position components',
        correct: false
      },
      {
        key: 'e',
        text: 'the displacement components are interpolated using the same shape functions used for the undeformed position components',
        correct: true
      },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 60,
    prompt: 'The elastic problem can be formulated in terms of displacements:',
    multiple: false,
    answers: [
      { key: 'a', text: 'always', correct: true },
      { key: 'b', text: 'only for statically determinate problems', correct: false },
      { key: 'c', text: 'only within the framework of the finite element method', correct: false },
      { key: 'd', text: 'never', correct: false },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 61,
    prompt: 'In a finite element procedure, the stress tensor:',
    multiple: false,
    answers: [
      { key: 'a', text: 'cannot be computed', correct: false },
      { key: 'b', text: 'is part of the solution', correct: false },
      { key: 'c', text: 'can be recovered from the solution', correct: true },
      { key: 'd', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 62,
    prompt: 'Consider an Euler-Bernoulli cantilever beam model, loaded with a uniformly distributed load. The exact solution is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'trigonometric', correct: false },
      { key: 'b', text: 'polynomial (quadratic)', correct: false },
      { key: 'c', text: 'polynomial (cubic)', correct: true },
      { key: 'd', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 63,
    prompt: 'A plane-strain constitutive law:',
    multiple: false,
    answers: [
      { key: 'a', text: 'has null axial stress', correct: false },
      { key: 'b', text: 'has null axial strain', correct: true },
      { key: 'c', text: 'has null shear stress', correct: false },
      { key: 'd', text: 'has null shear strain', correct: false },
      { key: 'e', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 64,
    prompt: 'The shear flows acting on a rib are:',
    multiple: false,
    answers: [
      { key: 'a', text: 'the flows equivalent to the load introduced by the rib', correct: false },
      { key: 'b', text: 'the flows equivalent to the load applied to the whole structure', correct: false },
      { key: 'c', text: 'the flows computed from the torsional equivalence equation', correct: false },
      { key: 'd', text: 'the flows computed by resorting to the bending equations', correct: false },
      { key: 'e', text: 'the flows equilibrating the load introduced by the rib', correct: true },
      { key: 'f', text: 'none of the above', correct: false }
    ]
  },
  {
    id: 65,
    prompt: 'According to the analytical solution, the shear stress transmitted by a glued connection is:',
    multiple: false,
    answers: [
      { key: 'a', text: 'higher at the extremities', correct: false },
      { key: 'b', text: 'lower at the extremities', correct: false },
      { key: 'c', text: 'constant', correct: false },
      { key: 'd', text: 'described by a sin function', correct: false },
      { key: 'e', text: 'described by a cos function', correct: true },
      { key: 'f', text: 'described by a quadratic polynomial function', correct: false },
      { key: 'g', text: 'none of the above', correct: false }
    ]
  }
]
